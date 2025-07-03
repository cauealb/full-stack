import React from "react"
import post from "./Post/post.js"

export default function Post() {
    return (
        <Container>
            {post.map(item => (
                <Post 
                    key={item.id}
                    title={item.title}
                    description={item.description}
                />
            ))}
        </Container>
    )
}