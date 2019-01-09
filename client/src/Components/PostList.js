import React from "react";
import Post from "./Post";
import PostsHeader from "./PostsHeader";

const PostList = ({ posts }) => {
    return (
        <div>
            <PostsHeader />
            <div className='post-list'>
                {posts.map(post => (
                    <Post post={post} key={post.id} />
                ))}
            </div>
        </div>
    );
}
export default PostList;