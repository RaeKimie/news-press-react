import React, { Component } from "react";
import * as api from "../utils/api";
import Loader from "./Loader";

class CommentRemover extends Component {
  state = { isDelete: false, isLoading: false };
  handleClick = event => {
    this.setState(currentState => {
      return { isDelete: !currentState.isDelete };
    });
  };
  handleDelete = event => {
    this.setState(currentState => {
      return { ...currentState, isLoading: true };
    });
    api.deleteComment(this.props.comment_id).then(() => {
      this.props.removeComment();
    });
  };
  render() {
    if (this.state.isLoading) return <Loader />;
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
