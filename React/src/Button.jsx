import React from "react";

export default function Button() {
    return (
        <button 
            onClick={() => props.onRemove(props.obj.id)}
        >
            Remover    
        </button>
    );
}