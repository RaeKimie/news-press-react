import React, { Component } from "react";
import * as api from "../utils/api";

class CommentAdder extends Component {
  state = { username: this.props.user.username, body: "" };

  handleChange = event => {
    const value = event.target.value;
    this.setState(currentState => {
      return { ...currentState, body: value };
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    api
      .postComment(this.props.uri, this.state)
      .then(comment => {
        this.props.addNewComment(comment);
      })
      .then(() => {
        this.setState(currentState => {
          return { ...currentState, body: "" };
        });
      });
  };

  render() {
    return (
      <form className="single-comment" onSubmit={this.handleSubmit}>
        <label>
          {!this.state.username && (
            <p className="grey-italic">Please sign in to leave a comment...</p>
          )}
          Post a new comment
          <br />
          <input
            className="comment-area"
            type="text"
            name="body"
            value={this.state.body}
            onChange={this.handleChange}
          />
        </label>

        <button>Add</button>
      </form>
    );
  }
}

export default CommentAdder;
