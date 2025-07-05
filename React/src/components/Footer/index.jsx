import React, { useContext } from "react";
import Container from './style.js'

import { Context } from "../Context/AppContext.jsx";

export default function Footer() {
    const { handleToggleTheme, themes } = useContext(Context)
    return (
        <Container>
            <span>JStack's Blog. Todos os direitos reservados.</span>
            <button 
                onClick={handleToggleTheme}
            >
                {`Mudar tema para ${themes === 'dark' ? 'light' : 'dark'}`}
            </button>
        </Container>
    );
}