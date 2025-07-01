import React, { useContext } from "react"
import PropsTypes from 'prop-types'
import PostHeader from "./PostHeader.jsx"
import { SubTitle } from "./style.js"



export default function Post({obj, onRemove}) {
    return (
        <>
            <article>
                <PostHeader 
                    obj={{
                        id: obj.id,
                        title: obj.title,
                        read: obj.read
                    }}
                    onRemove={onRemove}
                />
                <br /> 
                <br />
                <SubTitle>{obj.subtitle}</SubTitle>
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
        removed: PropsTypes.bool.isRequired,
    }).isRequired,
    onRemove: PropsTypes.func.isRequired,
}