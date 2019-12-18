import React, { Component } from "react";
import * as api from "../utils/api";

class CommentAdder extends Component {
  state = {
    username: this.props.user.username,
    body: "",
    isLoading: false,
    err: ""
  };

  handleChange = event => {
    const value = event.target.value;
    this.setState(currentState => {
      return { ...currentState, body: value, err: "", isLoading: false };
    });
  };
  handleSubmit = event => {
    const newComment = { username: this.state.username, body: this.state.body };
    event.preventDefault();
    this.setState(currentState => {
      return { ...currentState, isLoading: true };
    });
    if (newComment.body) {
      api
        .postComment(this.props.uri, newComment)
        .then(comment => {
          this.props.addNewComment(comment);
        })
        .then(() => {
          this.setState(currentState => {
            return { ...currentState, body: "", isLoading: false };
          });
        });
    } else {
      this.setState({ err: "error" });
    }
  };

  render() {
    return (
      <form className="single-comment" onSubmit={this.handleSubmit}>
        <label>
          Post a new comment
          <br />
          <input
            className="comment-area"
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
            placeholder={
              this.state.err && "Oops! Don't forget to leave a comment!"
            }
          />
        </label>

        <button className="button left" disabled={this.state.isLoading}>
          {!this.state.isLoading ? "Add" : "..."}
        </button>
      </form>
    );
  }
}

export default CommentAdder;
