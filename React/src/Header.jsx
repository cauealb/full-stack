import React from "react";
import PropTypes from "prop-types";
import Button from "./Button.jsx";

export default function Header({title, children, eventClickBtn}) {
    return (
        <>
            <h1>{title}</h1>
            <Button 
                onClick={eventClickBtn}
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