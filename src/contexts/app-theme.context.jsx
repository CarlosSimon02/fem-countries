import { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import App from "../App";

export const AppTheme = {
  light: "light",
  dark: "dark",
};

export const AppThemeContext = createContext({
  theme: "",
  setTheme: () => null,
});

export const AppThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(AppTheme.light);

  useEffect(() => {
    switch (theme) {
      case AppTheme.light:
        document.body.classList.remove(AppTheme.dark);
        document.body.classList.add(AppTheme.light);
        break;
      case AppTheme.dark:
        document.body.classList.remove(AppTheme.light);
        document.body.classList.add(AppTheme.dark);
        break;
      default:
        break;
    }
  }, [theme]);

  const value = {
    theme,
    setTheme,
  };

  return (
    <AppThemeContext.Provider value={value}>
      {children}
    </AppThemeContext.Provider>
  );
};
