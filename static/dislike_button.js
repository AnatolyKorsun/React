'use strict';
const e = React.createElement;
class DislikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { disliked: false };
  }

  render() {
    if (this.state.disliked) {
      return 'You disliked comment number ' + this.props.commentID;
    }
    return e(
      'button',
      { onClick: () => this.setState({ disliked: true }) },
      'Dislike'
    );
  }
}

document.querySelectorAll('.dislike_button_container')
  .forEach(domContainer => {
    const commentID = parseInt(domContainer.dataset.commentid, 10);
    ReactDOM.render(
      e(DislikeButton, { commentID: commentID }),
      domContainer
    );
  });