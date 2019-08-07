import React, { Component } from 'react'

function Contacts() {
    return <div className="Contacts" />;
  }
  
  function Chat() {
    return <div className="Chat" />;
  }
  
  function SplitPane(props) {
    return (
      <div className="SplitPane">
        <div className="SplitPane-left">
          {props.left}
        </div>
        <div className="SplitPane-right">
          {props.right}
        </div>
      </div>
    );
  }
  
  class App extends Component {
      constructor(props){
          super(props);
      }
      render(){
    return (
      <SplitPane
        left={
          <Chat />
        }
        right={
          <Contacts />
        } />
    );
      }
  }
  
export default App
  