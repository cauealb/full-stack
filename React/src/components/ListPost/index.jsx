import React from "react"
import Post from "./Post"
import arrPost from './Post/post.js'
import Container from './style.js'

export default function ListPost() {
    return (
        <Container>
            {arrPost.map(item => (
                <Post 
                    key={item.id}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </Container>
    )
}