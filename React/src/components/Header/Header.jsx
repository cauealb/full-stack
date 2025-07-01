import React, { useContext } from "react";
import PropTypes from "prop-types";
import Button from "../Button.jsx";
import { Context } from "../Context.jsx";

import { Tilte } from "./style.js";

export default function Header({title, children, eventClickBtn}) {
    const { toggleContextTheme } = useContext(Context)

    return (
        <>
            <Tilte>{title}</Tilte>
            <Button 
                onClick={toggleContextTheme}

            >   
                Alterar tema
            </Button>
            {children}
        </>
    )
}

Header.propType = {
    eventClickBtn: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired
}

Header.defaultProps = {
    title: `Posts`
}