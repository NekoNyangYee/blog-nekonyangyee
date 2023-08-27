import "@emotion/react";
import type { Theme as ThemeType } from "./theme/types";

declare module "@emotion/react" {
    export interface Theme extends ThemeType { }
}