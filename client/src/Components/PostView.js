import React from "react";
import { Link } from "react-router-dom";
import DeleteModal from "./DeleteModal";

class PostView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: null,
            title: '',
            contents: '',
            show: false
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

    deletePost = () => {
        this.props.deletePost(this.state.id);
        this.props.history.push('/');
    };

    showModal = () => {
        this.setState({ show: true });
    };

    hideModal = () => {
        this.setState({ show: false });
    };

    render() {
        return (
            <div className='post-view'>
                <div className='post-view-edits'>
                    <Link className='edit-link' to={`/api/posts/${this.state.id}`}>edit</Link>
                    <h4 className='delete' onClick={this.showModal}>delete</h4>
                </div>
                <h2 className='post-view-title' >{this.state.title}</h2>
                <p>{this.state.contents}</p>
                {this.state.show ? (
                    <DeleteModal deletePost={this.deletePost} hideModal={this.hideModal} />
                ) : null}
            </div>
        );
    }



}

export default PostView;