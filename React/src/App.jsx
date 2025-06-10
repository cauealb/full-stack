import React, { useState, createContext } from "react";
import Post from "./Post.jsx";
import Header from "./Header.jsx";

const category = 'Post da semana'

const ContextProvider = createContext('dark')

export default function App() {
    const [post, setPost] = useState([
    {id: Math.random(), title: "Título do post 1", subtitle: "Subtitle do Post 1", likes: 10, read: false},
    {id: Math.random(), title: "Título do post 2", subtitle: "Subtitle do Post 2", likes: 15, read: true},
    {id: Math.random(), title: "Título do post 3", subtitle: "Subtitle do Post 3", likes: 10, read: false},
    {id: Math.random(), title: "Título do post 4", subtitle: "Subtitle do Post 4", likes: 12, read: true},
])
    const [theme, setTheme] = useState('dark')

    function toggleContextTheme() {
        setTheme((state) => (
            state === 'dark' ? 'light' : 'dark'
        ))
    }

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
        setPost((state) => (
            state.filter(post => (
                post.id !== id
            ))
        ))
    }

    return (
        <ContextProvider.Provider value={theme}>
            <Header title={`Jstack`}>
                <span>{category}</span>
                <button onClick={handleNewPost}>Adicionar novo post</button>
            </Header>

            <hr />

            {post.map(item => (
                <Post 
                    key={item.id}
                    obj={item}
                    onRemove={handleRemovePost}
                />
            ))}
        </ContextProvider.Provider>
    )
}