import React from "react";
import Container from './style.js'

export default function Footer({ onToggleTheme, themes }) {

    return (
        <Container>
            <span>JStack's Blog. Todos os direitos reservados.</span>
            <button 
                type="button" 
                onClick={onToggleTheme}
            >
                {`Mudar tema ${themes === 'dark' ? 'light' : 'dark'}`}
            </button>
        </Container>
    );
}