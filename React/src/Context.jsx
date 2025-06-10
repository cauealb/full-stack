import React, {createContext, useState} from "react";


export default function Context(props) {
    const [theme, setTheme] = useState('dark');

    function toggleContextTheme() {
        setTheme((state) => (
            state === 'dark' ? 'ligth' : 'dark'
        ))
    }

    return (

    );
}