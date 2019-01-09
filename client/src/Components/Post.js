import React from "react";
import { NavLink } from "react-router-dom";

const Post = props => {
    const { post } = props;
    const quote = post.title.length >= 12
        ? `${post.title.substring(0, 12)}...`
        : post.title;
    const saidBy = post.contents.length >= 200
        ? `${post.contents.substring(0, 200)}...`
        : post.contents;
    return (
        <div className='post'>
            <NavLink to={`/api/posts/:id`}>
                <h3>{quote}</h3>
            </NavLink>
            <p>{saidBy}</p>
        </div>
    );
};



export default Post;


// import React from 'react';

// const Post = props => {
//     return (
//         <div className="post">
//             <h2>{props.title}</h2>
//             <h3>{props.contents}</h3>
//             <p>Post created: {props.created_at}</p>
//             <p>Post updated: {props.updated_at}</p>
//         </div>
//     );
// };

// Post.defaultProps = {
//     title: '',
//     contents: '',
//     created_at: '',
//     updated_at: ''
// };

// export default Post;
