import React from "react"
import PropsTypes from 'prop-types'

export default function Post({obj, onRemove}) {
    if(obj.read) {
        return (<h1>Titlo Lido</h1>)
    }

    return (
        <>
            <article>
                <strong>
                    {obj.read ? <s>{obj.title}</s> : obj.title} 
                </strong> 
                <br /> 
                <button onClick={() => onRemove(obj.id)}>Remover</button>
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
        likes: PropsTypes.number.isRequired
    }).isRequired,
    onRemove: PropsTypes.func.isRequired,
    likes: PropsTypes.number.isRequired
}