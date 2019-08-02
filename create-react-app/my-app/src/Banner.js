import React, { Component } from "react";

function WarningBanner(props) {
  if (props.warning) {
    return <div className="banner">Warning</div>;
  }
  else{return null}
}

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }
  handleToggleClick() {
    this.setState(state => ({
      showWarning: !state.showWarning
    }));
  }
  render() {
    return (<div>
        <WarningBanner warning={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
        {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
            </div> )
  }
}
export default Banner;
