import React from "react";
import PropTypes from "prop-types";
import Button from "./Button.jsx";

export default function PostHeader(props) {
    return (
        <>
            <strong>
                {props.obj.read ? <s>{props.obj.title}</s> : props.obj.title}
            </strong> 
            <Button
                onRemove={() => props.onRemove(props.obj.id)}
            >
                Remover
            </Button>
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