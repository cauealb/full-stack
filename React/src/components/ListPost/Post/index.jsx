import React from "react"
import Container from './style.js'

export default function Post({ title, description }) {
    return (
        <Container>
            <h1>{title}</h1>
            <span>{description}</span>
        </Container>
    )
}