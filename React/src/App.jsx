import React, { useState } from "react";
import Post from "./Post.jsx";
import Header from "./Header.jsx";
import { ThemeProvider } from "./Context.jsx";

const category = 'Post da semana'

export default function App() {
    const [post, setPost] = useState([
    {id: Math.random(), title: "Título do post 1", subtitle: "Subtitle do Post 1", likes: 10, read: false, removed: true},
    {id: Math.random(), title: "Título do post 2", subtitle: "Subtitle do Post 2", likes: 15, read: true, removed: false},
    {id: Math.random(), title: "Título do post 3", subtitle: "Subtitle do Post 3", likes: 10, read: false, removed: false},
    {id: Math.random(), title: "Título do post 4", subtitle: "Subtitle do Post 4", likes: 12, read: true, removed: false},
])

    function handleNewPost() {
        setPost((prevState) => (
        [
            ...prevState,
            {
                id:  Math.random(), 
                title: `Título do post ${prevState.length + 1}`, 
                subtitle: `Subtitle do post ${prevState.length + 1}`,
                likes: 10
            }
        ]
        ))
    }

    function handleRemovePost(id) {
        setPost(state => (
            state.map(item => (
                item.id === id ? {...item, removed: true} : item
            ))
        ))
    }

    return (
        <ThemeProvider>
            <Header title={`Jstack`}>
                <span>{category}</span>
                <button 
                  onClick={handleNewPost}
                  style={{
                    backgroundColor: 'black',
                    color: '#fff',
                    outline: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    borderRadius: 8,
                  }}>
                    Adicionar novo post
                </button>
            </Header>

            <hr />

            {post.map(item => (
                <Post 
                    key={item.id}
                    obj={item}
                    onRemove={handleRemovePost}
                />
            ))}
        </ThemeProvider>
    )
}