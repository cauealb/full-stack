import React from "react"

export default function Post(props) {
    return (
        <>
            <article>
                <h1>{props.post.title}</h1>
                <h3>{props.post.subtitle}</h3>
            </article>
        </>
    )   
}