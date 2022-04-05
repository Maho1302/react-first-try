import React from 'react';

const Post = ({post}) => {
    const {id, userId, title, body} = post;
    return (
        <div>
            <h5>id: {id}</h5> <h5>userId: {userId}</h5> <p>Title: {title}</p> <p>Body: {body}</p>
        </div>
    );
};

export default Post;