"use strict";
const reaction = React.createElement;
class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }
  render() {
    if (this.state.liked) {
      return "You liked this.";
    }
    return reaction(
      "button",
      { onClick: () => this.setState({ liked: true }) },
      "Like"
    );
  }
}
const domContainer = document.querySelector("#like_button_container");
ReactDOM.render(reaction(LikeButton), domContainer);
