import React, {createContext, useState} from "react";

export const Context =  createContext('dark')

export function ThemeProvider(props) {
    const [theme, setTheme] = useState('dark');

    function toggleContextTheme() {
        setTheme((state) => (
            state === 'dark' ? 'ligth' : 'dark'
        ))
    }

    return (
        <Context.Provider value={{
            theme, 
            toggleContextTheme: toggleContextTheme
        }}>
            {props.children}
        </Context.Provider>
    );
}