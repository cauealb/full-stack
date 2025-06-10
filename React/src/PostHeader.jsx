import React from "react";
import PropTypes from "prop-types";

export default function PostHeader(props) {
    return (
        <>
            <strong>
                {props.obj.read ? <s>{props.obj.title}</s> : props.obj.title}
            </strong> 
            <button onClick={() => props.onRemove(props.obj.id)}>Remover</button>
        </>
    );
}

PostHeader.propTypes = {
    obj: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        read: PropTypes.bool.isRequired
    }).isRequired,
    onRemove: PropTypes.func.isRequired
}