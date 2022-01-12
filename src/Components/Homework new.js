import {useEffect, useState} from "react";



function JsonTable() {
    const [users, setUsers] = useState([])
    const [posts, setPosts] = useState([])
    const [comments, setComments] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)
            });

        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(value => value.json())
            .then(value => {
                setPosts(value)
            });

        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(value => value.json())
            .then(value => {
                setComments(value)
            });

    }, []);

    return (
        <div>

            <div>
                {
                    users.map(value => <div key={value.id}>{value.name}</div>)
                }
            </div>
            <div>
                {
                    posts.map(value => <div key={value.id}>{value.title}</div>)
                }
            </div>
            <div>
                {
                    comments.map(value => <div key={value.id}>{value.body}</div>)
                }
            </div>
        </div>
    );
}

export default JsonTable;