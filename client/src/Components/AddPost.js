import React from "react";
import axios from "axios";

class AddPost extends React.Component {
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

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div className='add-post'>
                <form onSubmit={this.addPost}>
                    <h2>Create New Quote:</h2>
                    <input
                        type='text'
                        name='title'
                        placeholder='Post Quote'
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        required
                    />
                    <textarea
                        name='contents'
                        placeholder='Quote by'
                        value={this.state.contents}
                        onChange={this.handleInputChange}
                        required
                    />
                    <button className='btn' type='submit' onClick={this.addPost}>Save</button>
                </form>
            </div>
        );
    }


}

export default AddPost;