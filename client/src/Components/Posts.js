import React, { Component } from 'react';

import Post from './Post';

class Posts extends Component {
    render() {
        return (
            <div className="Posts">
                <h1>LOTR</h1>
                <ul>
                    {this.props.posts.map(post => {
                        return (
                            <Post
                                title={post.title}
                                id={post.id}
                                contents={post.contents}
                                created_at={post.created_at}
                                updated_at={post.updated_at}
                                key={post.id}
                            />
                        );
                    })}
                </ul>
            </div>
        );
    }
}

Post.defaultProps = {
    posts: [],
};

export default Posts;
