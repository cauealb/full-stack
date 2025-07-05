import React, { createContext, useContext } from "react"

const Context = createContext({
    handleToggleTheme: () => {},
    themes: 'dark'
})

export default function AppContext({ children }) {
    const [themes, setThemes] = useContext('dark')

    function handleToggleTheme() {
        setThemes(state => state === 'dark' ? 'light' : 'dark')
    }

    return (
        <Context value={{
            handleToggleTheme,
            themes
        }}>
            {children}
        </Context>
    )
}