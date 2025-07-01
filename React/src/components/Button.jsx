import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "./Context.jsx";

export default function Button(props) {
    const { theme } = useContext(Context)

    return (
        <button 
            onClick={props.onClick}
            style={{
                color: theme === 'dark' ? "#fff" : "#000",
                backgroundColor: theme === 'dark' ? "#000" : "#fff"
            }}
        >
            {props.children}    
        </button>
    );
}

Button.PropTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}