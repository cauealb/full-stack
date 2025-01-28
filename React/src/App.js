import React from "react"
import Post from './Post';

const alerSpaciel = 'Alerta Especial'

function App() {
    return (
        <>
            <h1>Blog Pessoal</h1>
            <h2>Post Da semana</h2>

            <hr />

            <Post 
                post={{
                    title: alerSpaciel,
                    subtitle: "Subtitulo do alerta N° 1"
                }}
            />
        </>
    )
}

export default App