import React, { createContext } from "react"

const Context = createContext({
    handleToggleTheme: () => {},
    themes: 'dark'
})

export default function AppContext({ children }) {

    return (
        <>

        </>
    )
}