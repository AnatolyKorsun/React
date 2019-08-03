import React, { Component } from "react";

class NameForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "lime"
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    console.log(event.target.value);
    console.log(this.state);
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    alert("A name was submitted:" + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <select>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option selected value="coconut">
            Coconut
          </option>
          <option value="mango">Mango</option>
        </select>
        <select value={this.state.value} onChange={this.handleChange}>
          <option value="grapefruit">Grapefruit</option>
          <option value="lime">Lime</option>
          <option value="coconut">
            Coconut
          </option>
          <option value="mango">Mango</option>
        </select>
        <select multiple={true} value={['B', 'C']}></select>
        <input type="submit" value="Submit" />
        <input type="file" />
      </form>
    );
  }
}
export default NameForm;
