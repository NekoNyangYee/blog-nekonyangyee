"use client"

import { Global, ThemeProvider as EmotionProvider } from "@emotion/react";
import { SetStateAction, useEffect, useLayoutEffect, useState, ReactNode } from "react";

import { colors, global } from ".";
import { Theme, ThemeMode, UserThemeMode } from "./types";

const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const THEME_MODE = "theme-mode";

    const [userMode, setUserMode] = useState<UserThemeMode>("auto");
    const [mode, setMode] = useState<ThemeMode>("light");
    const [isChanging, setIsChanging] = useState(false);

    useLayoutEffect(() => {
        const savedTheme = localStorage.getItem(THEME_MODE);
        setUserMode(savedTheme ? (savedTheme as UserThemeMode) : "auto");
    }, []);

    useLayoutEffect(() => {
        if (window.matchMedia) {
            if (userMode === "auto") {
                window.matchMedia("(prefers-color-scheme: dark)").matches
                    ? setMode("dark")
                    : setMode("light");
            } else {
                setMode(userMode);
            }
        } else {
            setMode("dark");
        }
    }, [userMode]);

    useEffect(() => {
        if (isChanging) setTimeout(() => setIsChanging(false), 300);
    }, [isChanging]);

    useEffect(() => {
        const MediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        const listener = (event: { matches: any; }) => {
            if (event.matches) setMode("dark");
            else setMode("light");
        };

        if (userMode === "auto")
            MediaQuery && MediaQuery.addEventListener("change", listener);

        return () => {
            MediaQuery && MediaQuery.removeEventListener("change", listener);
        };
    }, [userMode]);

    const change = (mode: SetStateAction<any>) => {
        setIsChanging(true);
        setUserMode(mode);
        localStorage.setItem("theme-mode", mode);
    };

    const theme: Theme = {
        mode,
        colors: { ...colors[mode as keyof typeof colors], ...colors["common"] },
        change,
        isChanging
    };

    return (
        <>
            <EmotionProvider theme={theme}>{children}</EmotionProvider>
            <Global styles={global(theme)} />
        </>
    );
};

export default ThemeProvider;