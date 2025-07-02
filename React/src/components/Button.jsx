import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "./Context.jsx";

import BtnStyle from './Button.js';

export default function Button(props) {
    const { theme } = useContext(Context)

    return (
        <BtnStyle 
            onClick={props.onClick}
        >
            {props.children}    
        </BtnStyle>
    );
}

Button.PropTypes = {
    children: PropTypes.node.isRequired,
    onClick: PropTypes.func.isRequired
}