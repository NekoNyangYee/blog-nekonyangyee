import { CSSProperties } from "react";

export type CSSColor = CSSProperties['color'];
export type ColorWithOpacity = (opacity?: number) => CSSColor;

export type ThemeMode = 'light' | 'dark';
export type UserThemeMode = ThemeMode | 'auto';

export interface ColorObject {
    [key: string]: ColorWithOpacity;
}

export interface Theme {
    mode: ThemeMode;
    colors: ColorObject;
    change: (mode: UserThemeMode) => void;
    isChanging: boolean;
}