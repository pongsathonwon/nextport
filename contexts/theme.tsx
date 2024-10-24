"use client";

import React, {
  createContext,
  Dispatch,
  PropsWithChildren,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";

type Theme = "light" | "dark";

type ThemeContext = {
  theme: Theme;
  toggleTheme: () => void;
} | null;

const ThemeContext = createContext<ThemeContext>(null);

export const useThemeContext = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("must be used in themeContextProvider");
  return ctx;
};

function ThemeContextProvider({ children }: PropsWithChildren) {
  const [theme, setTheme] = useState<Theme>("dark");
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");

      return;
    }
    setTheme("dark");
  };
  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      return;
    }
    document.documentElement.classList.add("dark");
  }, [theme]);
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeContextProvider;
