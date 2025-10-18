import React, { createContext, useContext, useEffect, useState } from "react"
import type { Theme, ThemeType } from "../../interfaces/Theme";

const ThemeContext=createContext<Theme | undefined>(undefined);

export const ThemeProvider = ({children}:{children:React.ReactNode}) => {
    const [theme,setTheme]=useState<ThemeType>(()=>{
        const savedTheme=localStorage.getItem("theme") as ThemeType | null;
        return savedTheme ?? 'light';
    });
    useEffect(()=>{
        document.documentElement.classList.remove("light","dark");
        document.documentElement.classList.add(theme);
        localStorage.setItem("theme",theme);
    },[theme]);

    const toggleTheme=()=>setTheme(prev=>prev==="light"? "dark":"light");

  return (
    <div>
        <ThemeContext.Provider value={{theme,toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    </div>
  )
}

export const UseTheme=()=>{
    const context=useContext(ThemeContext);
    if(!context) throw new Error("No theme provider");
    return context;
}