import React, { Component } from "react";

class CommentRemover extends Component {
  state = { isDelete: false };
  handleClick = event => {
    this.setState(currentState => {
      return { isDelete: !currentState.isDelete };
    });
  };
  handleDelete = event => {};
  render() {
    return (
      <div>
        {!this.state.isDelete ? (
          <button onClick={this.handleClick}>delete</button>
        ) : (
          <p>
            Are you sure you want to delete this comment? <button>yes</button>
            <button onClick={this.handleClick}>no</button>
          </p>
        )}
      </div>
    );
  }
}

export default CommentRemover;
