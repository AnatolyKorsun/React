import React, { Component } from "react";

class ToggleButton extends Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

      // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }
  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}


// class ToggleButton extends React.Component {

//     // This syntax ensures `this` is bound within handleClick.
//     // Warning: this is *experimental* syntax.

//     handleClick = () => {
//       console.log('this is:', this);
//     }
//     render() {
//       return (
//         <button onClick={this.handleClick}>
//           Click me
//         </button>
//       );
//     }
//   }


// class ToggleButton extends React.Component {
//     handleClick() {
//       console.log('this is:', this);
//     }
//     render() {

//       // This syntax ensures `this` is bound within handleClick

//       return (
//         <button onClick={(e) => this.handleClick(e)}>
//           Click me
//         </button>
//       );
//     }
//   }
export default ToggleButton;
