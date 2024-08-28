'use client';
import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { setPageTheme, getPageTheme } from "packages/utils/page-theme.utility";
import { GlobalStyle, GlobalDarkTheme, GlobalTheme } from "./GlobalStyling";
import { Header } from '../../../../packages/Header/Header';
import { Footer } from '../../../../packages/Footer/Footer';

// ClientLayout component
const ClientLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    // State to manage the current theme
    const [theme, setTheme] = useState(getPageTheme());

    // Effect to update the theme on mount
    useEffect(() => {
        setTheme(getPageTheme());
    }, []);

    const handleToggleTheme = () => {
        // Toggle between 'dark' and 'light'
        const newTheme = theme === GlobalDarkTheme ? GlobalTheme : GlobalDarkTheme;
        setPageTheme(newTheme === GlobalDarkTheme ? 'dark' : 'light');
        setTheme(newTheme);
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle theme={theme}/>
            <div>
                <Header onToggleTheme={handleToggleTheme} />
                {children}
            </div>
        </ThemeProvider>
    );
};

export default ClientLayout;
