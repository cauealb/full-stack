import React from "react";
import ReactDom from 'react-dom/client'

import GlobalStyle from './style/index.js'

import App from "./components/App.jsx";

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <>
        <GlobalStyle />
        <App />
    </>
)