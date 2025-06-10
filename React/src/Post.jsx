import React from "react"
import PropsTypes from 'prop-types'
import PostHeader from "./PostHeader"

export default function Post({obj, onRemove}) {
    return (
        <>
            <article>
                <PostHeader 
                    
                />
                <br /> 
                <br />
                <small>{obj.subtitle}</small>
            </article>
            <p>Likes: {obj.likes}</p>
            <br />
        </>
    )
}

Post.propTypes = {
    obj: PropsTypes.shape({
        id: PropsTypes.number.isRequired,
        title: PropsTypes.string.isRequired,
        subtitle: PropsTypes.string.isRequired,
        likes: PropsTypes.number.isRequired,
        read: PropsTypes.bool.isRequired,
    }).isRequired,
    onRemove: PropsTypes.func.isRequired,
}