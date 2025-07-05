import React from "react"
import Container from './style.js'

export default function Header({ onToggleTheme, themes }) {
    console.log(themes)
    return (
        <Container>
            <h1>JStack's Blog</h1>
            <button 
                type="button" 
                onClick={onToggleTheme}
            >
                {`Mudar tema ${themes === 'dark' ? 'light' : 'dark'}`}
            </button>
        </Container>
    )
}