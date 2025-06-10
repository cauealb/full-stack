import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
    return (
        <button 
            onClick={props.onClick}
        >
            {props.children}    
        </button>
    );
}

Button.PropTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}