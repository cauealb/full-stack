import React, { createContext, useEffect, useMemo, useRef, useState } from "react"

import { ThemeProvider } from "styled-components"
import theme from "../../style/theme"

export const Context = createContext({
    handleToggleTheme: () => {},
    themes: 'dark'
})

export default function AppContext({ children }) {
    const [themes, setThemes] = useState('dark');

    const currentTheme = useMemo(() => {
        return theme[themes] || theme.dark
    }, [themes])

    function handleToggleTheme() {
        setThemes(state => state === 'dark' ? 'light' : 'dark')
    }

    return (
        <Context value={{
            handleToggleTheme,
            themes
        }}>
            <ThemeProvider theme={currentTheme}>
                <button onClick={handleToggleTheme} >Toggle</button>
                {themes === 'dark' && children}
            </ThemeProvider>
        </Context>
    )
}