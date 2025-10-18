export type ThemeType="dark" | "light";
export interface Theme{
    theme:ThemeType;
    toggleTheme:()=>void;
}