import React, { Component } from "react";

class Form extends Component {
    
    constructor(props) {
        super(props);
    this.initialState = {
      name: "",
      job: ""
    };
    this.state = this.initialState;
  }
  render() {
    const { name, job } = this.state;
    return (
      <form>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={name}
          cnChange={this.handleChange}
        />
        <label>Job</label>
        <inpun type="text" name="job" value={job} onChange={this.onchange} />
      </form>
    );
  }
}
export default Form;
