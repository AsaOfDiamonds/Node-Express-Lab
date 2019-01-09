import React, { Component } from 'react';
import axios from 'axios';

class PostForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            contents: ''            
        };
    }

    addPost = event => {
        event.preventDefault();
        // add code to create the Post using the api
        const newPost = {
            title: this.state.title,
            contents: this.state.contents           
        }
        axios
            .post('http://localhost:8000/api/posts', newPost)
            .then(response => {
                console.log(response.data);
                this.props.updatePosts(response.data);
                this.props.history.push('/')
            })
            .catch(err => console.log(err));


    }

    handleInputChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };

    render() {
        return (
            <div className="post-form">
                <form onSubmit={this.addPost}>
                    <input
                        onChange={this.handleInputChange}
                        placeholder="Title"
                        value={this.state.title}
                        name="title"
                    />
                    <input
                        onChange={this.handleInputChange}
                        placeholder="Content"
                        value={this.state.contents}
                        name="content"
                    />                    
                    <button type="submit" onClick={this.addPost}>Add to the Lore</button>
                </form>
            </div>
        );
    }
}

export default PostForm;