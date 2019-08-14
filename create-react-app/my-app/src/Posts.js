import React, { Component } from "react";
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: []
    };
  }
  componentDidMount() {
    const url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";
    fetch(url)
      .then(result => result.json())
      .then(result => this.setState({ users: result }));
  }

  fethPosts = () => {
    const url =
      "https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*";
    fetch(url)
      .then(result => result.json())
      .then(result => this.setState({ posts: result }));
  };

  render() {
    const { users, posts } = this.state;

    const usersList = users.map((entry, index) => {
      return <li key={index}>{entry}</li>;
    });

    return (
      <div>
        <ul>{usersList}</ul>
        <button onClick={() => this.fethPosts()}>Posts</button>
      </div>
    );
  }
}
export default Posts;
