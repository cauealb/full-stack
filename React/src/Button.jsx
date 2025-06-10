import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
    return (
        <button 
            onClick={() => props.onRemove(props.obj.id)}
        >
            {props.children}    
        </button>
    );
}

Button.PropTypes = {
    children: PropTypes.node.isRequired,
    id: PropTypes.number.isRequired,
    onRemove: PropTypes.func.isRequired
}