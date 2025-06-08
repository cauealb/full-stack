import React, { useState } from "react";
import Post from "./Post.jsx";
import Header from "./Header.jsx";

const category = 'Post da semana'

const post = [
    {id:  Math.random(), title: "Título do post 1", subtitle: "Subtitle do Post 1", likes: 10},
    {id:  Math.random(), title: "Título do post 2", subtitle: "Subtitle do Post 2", likes: 5},
    {id:  Math.random(), title: "Título do post 3", subtitle: "Subtitle do Post 3", likes: 10},
    {id:  Math.random(), title: "Título do post 4", subtitle: "Subtitle do Post 4", likes: 12},
    {id:  Math.random(), title: "Título do post 5", subtitle: "Subtitle do Post 5", likes: 27},
]

export default function App() {
    const [newPost, setNewPost] = useState([
    {id:  Math.random(), title: "Título do post 1", subtitle: "Subtitle do Post 1", likes: 10},
    {id:  Math.random(), title: "Título do post 2", subtitle: "Subtitle do Post 2", likes: 5},
    {id:  Math.random(), title: "Título do post 3", subtitle: "Subtitle do Post 3", likes: 10},
    {id:  Math.random(), title: "Título do post 4", subtitle: "Subtitle do Post 4", likes: 12},
    {id:  Math.random(), title: "Título do post 5", subtitle: "Subtitle do Post 5", likes: 27},
])

    function handleNewPost() {
        const newPost = {
            id:  Math.random(), 
            title: "Título do post 1", 
            subtitle: "Subtitle do Post 1", 
            likes: 10
        }

    }


    return (
        <>
            <Header title="JStack">
                <span>{category}</span>
                <button onClick={handleNewPost}>Adicionar novo post</button>
            </Header>

            <hr />

            {post.map(item => (
                <Post 
                    key={item.id}
                    obj={{
                        title: item.title,
                        subtitle: item.subtitle
                    }}
                    likes={item.likes}
                />
            ))}
        </>
    )
}