import React, { Component } from "react";
import * as api from "../utils/api";

class CommentRemover extends Component {
  state = { isDelete: false };
  handleClick = event => {
    this.setState(currentState => {
      return { isDelete: !currentState.isDelete };
    });
  };
  handleDelete = event => {
    api.deleteComment(this.props.comment_id).then(() => {
      this.props.removeComment();
    });
  };
  render() {
    return (
      <div>
        {!this.state.isDelete ? (
          <button onClick={this.handleClick}>delete</button>
        ) : (
          <p>
            Are you sure you want to delete this comment?{" "}
            <button onClick={this.handleDelete}>yes</button>
            <button onClick={this.handleClick}>no</button>
          </p>
        )}
      </div>
    );
  }
}

export default CommentRemover;
