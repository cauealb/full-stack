import React from "react"
import PropsTypes from 'prop-types'

export default function Post(
    {   obj,         
        likes, 
        onRemove
    }
) {
    return (
        <>
            <article>
                <strong>{obj.title}</strong> <br /> 
                <button onClick={() => onRemove(obj.id)}>Remover</button>
                <br />
                <small>{obj.subtitle}</small>
            </article>
            <p>Likes: {likes}</p>
            <br />
        </>
    )
}

Post.propTypes = {
    obj: PropsTypes.shape({
        id: PropsTypes.number.isRequired,
        title: PropsTypes.string.isRequired,
        subtitle: PropsTypes.string.isRequired
    }).isRequired,
    onRemove: PropsTypes.func.isRequired,
    likes: PropsTypes.number.isRequired
}