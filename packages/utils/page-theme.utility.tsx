import { GlobalDarkTheme, GlobalTheme } from "apps/ui-documentation/src/app/GlobalStyling";

interface IGlobalTheme {
  [key: string]: IGlobalThemeAttributes
}

interface IGlobalThemeAttributes {
  [key: string]: string;
}

// Function to get the current theme from localStorage
export function getPageTheme(): IGlobalTheme {
  if (typeof window !== 'undefined') { // Ensure we are in the browser environment
    const storedTheme = localStorage.getItem('theme');
    if (storedTheme === 'dark') {
      return GlobalDarkTheme;
    } else if (storedTheme === 'light') {
      return GlobalTheme;
    }
  }
  // Default to GlobalTheme if no theme is set
  return GlobalTheme;
}

// Function to set the theme in localStorage
export function setPageTheme(theme: 'dark' | 'light'): IGlobalTheme {
  // P.S: This is to Ensure we are in the browser environment
  if (typeof window !== 'undefined') { 
    if (theme === 'dark') {
      localStorage.setItem('theme', 'dark');
      return GlobalDarkTheme;
    } else {
      localStorage.setItem('theme', 'light');
      return GlobalTheme;
    }
  }
  // We return Default to GlobalTheme if no theme is set
  return GlobalTheme;
}
