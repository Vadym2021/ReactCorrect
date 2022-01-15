import React, {useEffect, useState} from 'react';

import Details from "./Details";
import {userService} from "../services/user_service";
import GetPosts from "./Get_Posts";

const Hometask02 = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        userService.getAll()
            .then(value => setUsers(value))
    }, []);

    const [posts, setPosts] = useState(null);

    const getPostById = (id) => {
        fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts/')
            .then(value => value.json())
            .then(value => setPosts(value))

    }

    const [user, setUser] = useState(null);

    const getUserId = (id) => {
        userService.getById(id)
            .then(value => setUser(value))
    }
    // console.log(details);
    return (
        <div>


            {
                users.map(value => <Details key={value.id} user={value} getUserId={getUserId}/>)
            }

            {user && <div>
                --{user.id}
                --{user.name}
                --{user.email}
                <button onClick={() => getPostById(user.id)}>GetPosts</button>

            </div>}

            {posts && <div>

                {posts.map(post => <div key={post.id}> {post.id} --- {post.body} </div>)}




            </div>}

        </div>
    );
};

export default Hometask02;

// <button onClick={()=>}>GetDetails</button>

//
// {details.length > 0 && (
//     <div>
//         <p>POSTS</p>
//         {details.map(detail => <div key={detail.id}> {detail.id} --- {detail.body} </div>)}
//     </div>
// )
// }

//
// const getPostById = (id) => {
//     fetch('https://jsonplaceholder.typicode.com/users/' + id + '/posts/')
//         .then(value => value.json())
//         .then(value => setPosts(value))
//
// }

//
// {
//     post.map(value => <GetPosts key={value.id} post={value} getPostById={getPostById}/>)
// }

