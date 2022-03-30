import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const PostDetail = () => {
    const { postsId } = useParams();
    const [post, setPost] = useState({});
    useEffect(() => {
        const url = (`https://jsonplaceholder.typicode.com/posts/${postsId}`)
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [postsId])
    return (
        <div>
            <h4>This is Post Detail for:{postsId}</h4>
            <h5>{post.title}</h5>
            <p><small>{post.body}</small></p>
        </div>
    );
};

export default PostDetail;