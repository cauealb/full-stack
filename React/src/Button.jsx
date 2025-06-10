import React from "react";
import PropTypes from "prop-types";

export default function Button(props) {
    return (
        <button 
            onClick={() => props.onRemove(props.obj.id)}
        >
            Remover    
        </button>
    );
}

Button.PropTypes = {
    onRemove: PropTypes.func.isRequired
}