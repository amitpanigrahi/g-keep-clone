import React from "react";
import {useDarkMode} from "./hooks/useDarkMode";
import {darkTheme, lightTheme} from "./constants/theme";
import {ThemeProvider} from "styled-components";

const defaultContextData = {
    theme: "light",
    toggleTheme: () => {}
};

const ThemeContext = React.createContext(defaultContextData);
const useTheme = () => React.useContext(ThemeContext);

const ThemeContextProvider = ({ children }) => {
    const [theme, toggleTheme, componentMounted] = useDarkMode();

    if (!componentMounted) {
        return <div />;
    }

    const isLight = theme === 'light';
    const themeMode = isLight ? lightTheme : darkTheme;
    return (
        <ThemeProvider theme={themeMode}>
            <ThemeContext.Provider
                value={{
                    theme,
                    isLight,
                    toggleTheme
                }}
            >
                {children}
            </ThemeContext.Provider>
        </ThemeProvider>
    );
};

export { ThemeContextProvider, useTheme };
