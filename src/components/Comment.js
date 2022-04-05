import React from 'react';

const Comment = ({comment}) => {
    const {postId, id, name, email, body} = comment;
    return (
        <div>
            <h5>postId: {postId}</h5> <h5>id: {id}</h5> <p>Email: {email}</p> <p>Body: {body}</p>
        </div>
    );
};

export default Comment;