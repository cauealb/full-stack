import React from "react";
import ReactDom from 'react-dom/client'

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
    <h1>Olá React, Node e Typescript!</h1>,
    <span>Em produção</span>
)