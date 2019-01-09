import React, { Component } from 'react';
import axios from "axios";
import { Route } from "react-router-dom";
import LeftSideBarNav from './Components/LeftSideBarNav';
import PostList from "./Components/PostList";
import AddPost from "./Components/AddPost";
import './App.css';
import PostView from "./Components/PostView";
import EditView from "./Components/EditView";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:8000/api/posts')
      .then(response => {
        console.log(response.data);
        this.setState({
          posts: response.data
        });
      })
      .catch(err => console.log(err));
  }

  updatePosts = () => {
    axios
      .get('http://localhost:8000/api/posts')
      .then(response => this.setState({ posts: response.data }))
      .catch(err => console.log(err));
  };

  handleSubmit = post => {
    axios
      .post('http://localhost:8000/api/create', post)
      .then(() => this.updatePosts())
      .catch(err => console.log(err));
  }

  deletePost = id => {
    axios
      .delete(`http://localhost:8000/api/delete/${id}`)
      .then(() => this.updatePosts())
      .catch(err => console.log(err));
  }

  editPost = (post, id) => {
    axios
      .put(`http://localhost:8000/api/edit/${id}`, post)
      .then(() => this.updatePosts())
      .catch(err => console.log(err));
  }

  render() {
    const { posts } = this.state;
    return (
      <div className="App">
        <LeftSideBarNav />
        <div className='app-content'>
          <Route exact path='/' render={() => <PostList posts={posts} />} />
          <Route
            path='/api/posts/create'
            render={(props) => (
              <AddPost {...props} onSubmit={this.handleSubmit} />
            )}
          />
          <Route
            path='/api/view/:id'
            render={(props) => (
              <PostView {...props} posts={posts} deletePost={this.deletePost} />
            )}
          />
          <Route
            path='/api/edit/:id'
            render={(props) => (
              <EditView {...props} posts={posts} onSubmit={this.editPost} />
            )}
          />    
         
        </div>
      </div>
    );
  }
}

export default App;
