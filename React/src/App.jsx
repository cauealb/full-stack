import React from "react";
import Post from "./Post.jsx";

const category = 'Post da semana'

export default function App() {
    return (
        <>
            <h1>JStack's Blog</h1>
            <span>{category}</span>

            <hr />

            <Post 
                obj={{
                    title: "Post da linha 1",
                    subtitle: "Subtexto da linha 1"
                }}
                babatinha123="1...2...3"
            />
            <Post 
                obj={{
                    title: "Post da linha 2",
                    subtitle: "Subtexto da linha 2"
                }}
            />
            <Post 
                obj={{
                    title: "Post da linha 3",
                    subtitle: "Subtexto da linha 3"
                }}
            />
        </>
    )
}