import React from "react"

function Post(props) {
    return (
        <>
            <article>
                <strong>{props.obj.title}</strong> <br />
                <small>{props.obj.subtitle}</small>
            </article>
            <p>{props.babatinha123}</p>
            <br />
        </>
    )
}

export default Post;