import React from "react";

class EditView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: '',
            contents: ''
        };
    }

    componentDidMount() {
        const post = this.props.posts.find(
            post => `${post.id}` === this.props.match.params.id
        );
        this.setState(post);
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.title === '' || this.props.match.params.id !== prevProps.match.params.id) {
            const post = this.props.posts.find(
                post => `${post.id}` === this.props.match.params.id
            );
            this.setState(post);
        }
    }

    handleInputChange = event => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleEditSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({
            title: this.state.title,
            contents: this.state.contents
        },
            this.state.id
        );
        this.props.history.push('/');
    };


    render() {
        return (
            <div className='edit-view'>
                <form onSubmit={this.handleEditSubmit}>
                    <h2>Edit Quote:</h2>
                    <input
                        type='text'
                        name='title'
                        placeholder='Edit Quote'
                        value={this.state.title}
                        onChange={this.handleInputChange}
                        required
                    />
                    <textarea
                        name='contents'
                        placeholder='Character Quoted'
                        value={this.state.contents}
                        onChange={this.handleInputChange}
                    />
                    <button className='btn' type='submit'>Update</button>
                </form>
            </div>
        );
    }
}

export default EditView;