import React from "react";

class AddPost extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            contents: ''
        };
    }

    handleCreatePost = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
        this.setState({ title: '', contents: '' });
        this.props.history.push('/');
    };

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    render() {
        return (
            <div className='add-post'>
                <form onSubmit={this.handleCreatePost}>
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
                        name='textBody'
                        placeholder='Quote by'
                        value={this.state.contents}
                        onChange={this.handleInputChange}
                        required
                    />
                    <button className='btn' type='submit'>Save</button>
                </form>
            </div>
        );
    }


}

export default AddPost;