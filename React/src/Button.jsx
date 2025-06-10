import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
    return (
        <button 
            onClick={props.onRemove}
        >
            {props.children}    
        </button>
    );
}

Button.PropTypes = {
    children: PropTypes.node.isRequired,
    onRemove: PropTypes.func.isRequired
}