import React from "react"
import PropsTypes from 'prop-types'

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

Post.PropType = {
    
}

export default Post;