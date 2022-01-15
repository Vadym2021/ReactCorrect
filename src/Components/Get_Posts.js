import React from 'react';

const GetPosts = ({post: {id, body}, getPostById}) => {
    console.log(getPostById)
    return (
        <div>
            <button onClick={() => getPostById(id)}>GetPosts</button>
        </div>
    );
};

export default GetPosts;