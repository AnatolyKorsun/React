import React, { Component } from 'react'
function Avatar(props) {
    return (
        <img
        className="Avatar"
        src={props.user.avatarUrl}
        alt={props.user.name}
        />
        );
    }
  function UserInfo(props){
    return (
        <div className="UserInfo">
          <div className="UserInfo-name">{props.user.name}</div>
        </div>
      );
  }  
  function CommentText(props){
      return(
    <div className="Comment-text">{props.user.text}</div>
      );
  }
    const comment = {
        date: new Date(),
        text: 'I hope you enjoy learning React!',
        author: {
          name: 'Hello Kitty',
          avatarUrl: 'https://placekitten.com/g/64/64',
        },
      };
class Comment extends Component{
render() {
    return (
    <div className="Commetn">
      <div className="UserInfo">
         <Avatar user={comment.author} /> 
         <UserInfo user={comment.author} />
         <CommentText user={comment} />
        </div>    
    </div>
    );
}
}
export default Comment