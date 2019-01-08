import React, { Component } from 'react';
import axios from "axios";
import { Route, Link, NavLink } from "react-router-dom";
import './App.css';
import Posts from "./Components/Posts";

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
  render() {
    return (
      <div className="App">
        <h1>Herrro</h1>
        <Route
          exact path='/'
          render={(props) => (
        <Posts {...props} posts={this.state.posts} />
          )}
          />
      </div>
    );
  }
}

export default App;
