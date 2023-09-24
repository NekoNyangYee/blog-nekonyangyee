"use client"

import React, { useEffect, useState } from "react";
import styled from "@emotion/styled";

const SnackBar = styled.div<{ visible: boolean }>(({ theme, visible }) => `
    position: fixed;
    top: ${visible ? "70px" : "-100px"};
    left: 50%;
    transform: translateX(-50%);
    background-color: ${theme.colors.text(90)};
    color: ${theme.colors.background(90)};
    padding: 10px 30px;
    border-radius: 12px;

    @media (max-width: 872px) {
        width: 74%;
        top: ${visible ? "70px" : "-100px"};
    }
`);

const ThemeSnackBar = () => {
    const [systemTheme, setSystemTheme] = useState<string | null>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const showSnackbar = (theme: string) => {
            setSystemTheme(theme);
            setIsVisible(true);

            setTimeout(() => {
                setIsVisible(false);
            }, 3000);
        };

        const checkSystemTheme = () => {
            if (window.matchMedia) {
                if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
                    showSnackbar("다크");
                } else {
                    showSnackbar("라이트");
                }
            }
        };

        const isSnackbarHidden = localStorage.getItem("isSnackbarHidden");

        if (isSnackbarHidden === null) {
            checkSystemTheme();
        }

        const systemThemeChangeHandler = (e: MediaQueryListEvent) => {
            const theme = e.matches ? "다크" : "라이트";
            showSnackbar(theme);
        };

        const systemThemeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

        systemThemeMediaQuery.addEventListener("change", systemThemeChangeHandler);

        return () => {
            systemThemeMediaQuery.removeEventListener("change", systemThemeChangeHandler);
        };
    }, []);

    const hideSnackbar = () => {
        setIsVisible(false);
        localStorage.setItem("isSnackbarHidden", "true");
    };

    return (
        <SnackBar visible={isVisible} onClick={hideSnackbar}
            style={{
                transition: "top 0.5s",
            }}
        >
            {isVisible && (
                <p>
                    시스템 설정에 따라 테마가 {systemTheme} 모드로 변경되었습니다.
                </p>
            )}
        </SnackBar>
    );
};

export default ThemeSnackBar;