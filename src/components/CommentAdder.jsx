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
    api.postComment(this.props.uri, this.state).then(comment => {
      this.props.addNewComment(comment);
    });
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
            onChange={this.handleChange}
          />
        </label>

        <button>Add</button>
      </form>
    );
  }
}

export default CommentAdder;
