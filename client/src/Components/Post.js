import React from 'react';

const Post = props => {
    return (
        <div className="post">
            <h2>{props.title}</h2>
            <h3>{props.contents}</h3>
            <p>Post created: {props.created_at}</p>
            <p>Post updated: {props.updated_at}</p>
        </div>
    );
};

Post.defaultProps = {
    title: '',
    contents: '',
    created_at: '',
    updated_at: ''
};

export default Post;
