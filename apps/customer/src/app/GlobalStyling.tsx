'use client';
import React from "react";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";
import { Julius_Sans_One } from 'next/font/google';
import { Plaster } from 'next/font/google';

interface IGlobalTheme {
    [key: string]: IGlobalThemeAttributes
}

interface IGlobalThemeAttributes {
    [key: string]: string;
}

// Fonts
const JuliusFont = Julius_Sans_One({
    subsets: ['latin'],
    weight: '400',
});

const PlasterFont = Plaster({
    subsets: ['latin'],
    weight: '400',
});

// Define the themes
export const GlobalTheme: IGlobalTheme = {
    pageColors: {
        bgPrimary: '#FFFFFF',
        textPrimary: '#FFFFFF',
        bgSecondary: '#F5F5F5',
        bgTertiary: '#454545',
        textTertiary: '#454545',
        bgQuaternary: '#236649',
        bgQuinary: '#D3B667',
        bgSenary: '#FB2943',
    }
};

export const GlobalDarkTheme: IGlobalTheme = {
    pageColors: {
        bgPrimary: '#181818',
        textPrimary: '#454545',
        bgSecondary: '#313131',
        bgTertiary: '#FFFFFF',
        textTertiary: '#FFFFFF',
        bgQuaternary: '#236649',
        bgQuinary: '#D3B667',
        bgSenary: '#FB2943',
    }
};

// Global styles
export const GlobalStyle = createGlobalStyle<{ theme: IGlobalTheme }>`
html {
    width: 100% !important;
    margin: 0;
    padding: 0;
    background-color: ${({ theme }) => theme.pageColors.bgSecondary} !important;
}    

body {
    background: transparent;
    color: ${({ theme }) => theme.pageColors.textTertiary};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    min-height: 100vh;
    width: 100% !important;
}

h1, h2, h3, h4, h5, h6 {
    color: ${({ theme }) => theme.pageColors.textTertiary};
    font-weight: bolder;
}

p {
    color: ${({ theme }) => theme.pageColors.textTertiary};
    line-height: 1.5;
    font-weight: lighter;
    margin: 0;
}

input, textarea, button {
    font-family: ${JuliusFont.style.fontFamily};
}

ul{
    list-style: none;
    margin: 0;
    padding: 0;
}
`;
