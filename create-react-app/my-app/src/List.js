import React, { Component } from "react";

// function ListItem(props) {
//   return <li >{props.value}</li>;
// }
// function NumberList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map((number) =>
//     <ListItem key={number.toString()} value={number} />
//   );
//   return (
//     <ul>
//       {listItems}
//     </ul>
//   );
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// class List extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     return (
//     <NumberList numbers={numbers} />
//     )
//   }
// }

function Blog(props) {
  const sidebar = (
    <ul>
      {props.posts.map((post) =>
        <li key={post.id}>
          {post.title}
        </li>
      )}
    </ul>
  );
  const content = props.posts.map((post) =>
    <div key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content}</p>
    </div>
  );
  return (
    <div>
      {sidebar}
      <hr />
      {content}
    </div>
  );
}
const posts = [
  { id: 1, title: "Hello World", content: "Welcome to learning React!" },
  { id: 2, title: "Installation", content: "You can install React from npm." }
];

class List extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Blog posts={posts} />;
  }
}
export default List;
