import React from "react";

export default function Header({title, children}) {
    return (
        <>
            {children}
            <h1>{title}</h1>
        </>
    )
}