import React from "react"

function Post(props) {
    return (
        <>
            <article>
                <strong>{props.obj.title}</strong> <br />
                <small>{props.obj.subtitle}</small>
            </article>
            <br />
        </>
    )
}

export default Post;