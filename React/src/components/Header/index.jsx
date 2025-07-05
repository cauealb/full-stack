import React, { useContext } from "react"
import Container from './style.js'
import { Context } from "../Context/AppContext.jsx"

export default function Header() {
    const { handleToggleTheme, themes } = useContext(Context)

    return (
        <Container>
            <h1>JStack's Blog</h1>
            <button
                onClick={handleToggleTheme}
            >
                {`Mudar tema para ${themes === 'dark' ? 'light' : 'dark'}`} 
            </button>
        </Container>
    )
}