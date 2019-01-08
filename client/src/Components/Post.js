import React from 'react';

const Post = props => {
    return (
        <div className="post">
            <h3>{props.title}</h3>
            <p>{props.contents}</p>
            <h5>{props.created_at}</h5>
            <h5>{props.updated_at}</h5>
        </div>
    );
};

Post.defaultProps = {
    title: '',
    content: '',
    created_at: '',
    updated_at: ''
};

export default Post;
