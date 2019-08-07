import React, { Component } from 'react'



function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }
  
  class WelcomeDialog extends Component {
      constructor(props){
          super(props);
      }
      render(){
    return (
      <FancyBorder color="red">
        <h1 className="Dialog-title">
          Welcome
        </h1>
        <p className="Dialog-message">
          Thank you for visiting our spacecraft!
        </p>
      </FancyBorder>
    );
      }
  }

  export default WelcomeDialog