import React, {createContext, useState} from "react";

export const ThemeProvider =  createContext('dark')

export default function Context(props) {
    const [theme, setTheme] = useState('dark');

    function toggleContextTheme() {
        setTheme((state) => (
            state === 'dark' ? 'ligth' : 'dark'
        ))
    }

    return (
        <ThemeProvider.Provider value={{
            theme, 
            toggleContextTheme: toggleContextTheme
        }}>
            {props.children}
        </ThemeProvider.Provider>
    );
}