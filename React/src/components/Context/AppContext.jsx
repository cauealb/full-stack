import React, { createContext, useEffect, useMemo, useRef, useState } from "react"

import { ThemeProvider } from "styled-components"
import theme from "../../style/theme"

export const Context = createContext({
    handleToggleTheme: () => {},
    themes: 'dark'
})

export default function AppContext({ children }) {
    const [themes, setThemes] = useState('dark')
    const render = useRef(true);

    const currentTheme = useMemo(() => {
        return theme[themes] || theme.dark
    }, [themes])

    function handleToggleTheme() {
        setThemes(state => state === 'dark' ? 'light' : 'dark')
    }

    useEffect(() => {
        if(render.current) {
            render.current = false
            return
        }

        console.debug('Segunda renderização!');
    }, [themes])

    return (
        <Context value={{
            handleToggleTheme,
            themes
        }}>
            <ThemeProvider theme={currentTheme}>
                {children}
            </ThemeProvider>
        </Context>
    )
}