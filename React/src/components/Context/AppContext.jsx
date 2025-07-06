import React, { createContext, useEffect, useMemo, useState } from "react"

import { ThemeProvider } from "styled-components"
import theme from "../../style/theme"

export const Context = createContext({
    handleToggleTheme: () => {},
    themes: 'dark'
})

export default function AppContext({ children }) {
    const [themes, setThemes] = useState('dark')
    const [qualquer, setQualquer] = useState(123)

    const currentTheme = useMemo(() => {
        return theme[themes] || theme.dark
    }, [themes])

    function handleToggleTheme() {
        setThemes(state => state === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        console.debug("Executou o useEffect!")
    }, [themes])

    return (
        <Context value={{
            handleToggleTheme,
            themes
        }}>
            <ThemeProvider theme={currentTheme}>
                <button onClick={}>Teste</button>
                {children}
            </ThemeProvider>
        </Context>
    )
}