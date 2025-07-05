import React from "react"
import Container from './style.js'

export default function Header({ onToggleTheme }) {

    return (
        <Container>
            <h1>JStack's Blog</h1>
            <button type="button" onClick={onToggleTheme}>Mudar de tema</button>
        </Container>
    )
}