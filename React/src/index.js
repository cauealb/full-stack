import React from "react";
import ReactDom from 'react-dom/client'
import './index.scss'

import App from "./App.jsx";

const root = ReactDom.createRoot(document.getElementById('root'))
root.render(
    <App />
)