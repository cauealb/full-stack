import React from "react"
import PropsTypes from 'prop-types'

function Post({obj, likes}) {
    return (
        <>
            <article>
                <strong>{obj.title}</strong> <br />
                <small>{obj.subtitle}</small>
            </article>
            Likes: {likes}
            <br />
        </>
    )
}

Post.propTypes = {
    obj: PropsTypes.shape({
        title: PropsTypes.string.isRequired,
        subtitle: PropsTypes.number.isRequired
    }).isRequired,
    likes: PropsTypes.number.isRequired
}

Post.defaultPros ={
    obj: PropsTypes.shape({
        title: `Post da semana qualquer`
    })
}

export default Post;