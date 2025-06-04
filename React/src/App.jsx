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
                title="Post da linha 1"
                subtitle="Subtexto da linha 1"
            />
            <Post 
                title="Post da linha 2"
                subtitle="Subtexto da linha 2"
            />
            <Post 
                title="Post da linha 3"
                subtitle="Subtexto da linha 3"
            />
        </>
    )
}