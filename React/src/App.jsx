import React from "react";
import Post from "./Post.jsx";
import Header from "./Header.jsx";

const category = 'Post da semana'

const post = [
    {title: "Título do post 1", subtitle: "Subtitle do Post 1", likes: 10},
    {title: "Título do post 2", subtitle: "Subtitle do Post 2", likes: 5},
    {title: "Título do post 3", subtitle: "Subtitle do Post 3", likes: 10},
    {title: "Título do post 4", subtitle: "Subtitle do Post 4", likes: 12},
    {title: "Título do post 5", subtitle: "Subtitle do Post 5", likes: 27},
]

export default function App() {
    return (
        <>
            <Header title="JStack">
                <span>{category}</span>
            </Header>

            <hr />

            {}
        </>
    )
}