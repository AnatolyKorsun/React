import React, { Component } from 'react'

function FancyBorder(props) {
    return (
      <div className={'FancyBorder FancyBorder-' + props.color}>
        {props.children}
      </div>
    );
  }

class Dialog extends Component{
constructor(props){
    super(props);
}
render(){
    return(
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {this.props.title}</h1>
                < p className="Dilog-message"> 
                {this.props.message}</p>
                {this.props.children}
        </FancyBorder>
    );
}
};


export default Dialog