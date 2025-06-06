import React from "react";
import Post from "./Post.jsx";
import Header from "./Header.jsx";

const category = 'Post da semana'

export default function App() {
    return (
        <>
            <Header title="JStack">
                <span>{category}</span>
            </Header>

            <hr />

            <Post 
                obj={{
                    title: "Post da linha 1",
                    subtitle: "20"
                }}
                // likes={10}
            />
            <Post 
                obj={{
                    // title: "Post da linha 2",
                    subtitle: "Subtexto da linha 2"
                }}
                likes={10}
            />
            <Post 
                obj={{
                    title: "Post da linha 3",
                    subtitle: "Subtexto da linha 3"
                }}
                likes={10}

            />
        </>
    )
}