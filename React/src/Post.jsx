import React from "react"
import PropsTypes from 'prop-types'

function Post(props) {
    return (
        <>
            <article>
                <strong>{props.obj.title}</strong> <br />
                <small>{props.obj.subtitle}</small>
            </article>
            Likes: {props.likes}
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