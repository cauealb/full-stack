import React from "react";
import PropTypes from "prop-types";

export default function Header({title, children}) {
    return (
        <>
            <h1>{title}</h1>
            {/* //Filho que é jogado dentro do componente */}
            {children}
        </>
    )
}

Header.propType = {
    title: PropTypes.string.isRequired,
}

Header.defaultProps = {
    title: `Posts`
}