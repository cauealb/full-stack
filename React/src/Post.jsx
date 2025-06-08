import React from "react"
import PropsTypes from 'prop-types'

export default function Post({obj, likes}) {
    return (
        <>
            <article>
                <strong>{obj.title}</strong> <br />
                <small>{obj.subtitle}</small>
            </article>
            <p>Likes: {likes}</p>
            <br />
        </>
    )
}

Post.propTypes = {
    obj: PropsTypes.shape({
        title: PropsTypes.string.isRequired,
        subtitle: PropsTypes.string.isRequired
    }).isRequired,
    likes: PropsTypes.number.isRequired
}