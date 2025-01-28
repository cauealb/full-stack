import React from "react"
import Post from './Post';
import Header from "./Header";

const alerSpaciel = 'Alerta Especial'

function App() {
    return (
        <>
            <Header title="Blog do Cauê">
                <h2>Subtítulo do Cauê</h2>
            </Header>

            <Header title="Blog Outro"/>

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