import React from "react";

function Posts({ posts, loading }) {
    console.log(loading)
    console.log(posts)

    if(loading) {
        console.log(loading)
        return <h1>Loading...</h1>
    }
    
    return(
        <div>
            <ul className="list-group mb-4">
                {
                    posts.map(item => 
                        <li key={item.id} className="list-group-item">{item.title}</li>
                    )
                }
            </ul>
        </div>
    )
}

export default Posts;