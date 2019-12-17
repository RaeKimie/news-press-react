import React, { Component } from "react";
import { formatTime } from "../utils/utils";
import Voter from "./Voter";
import CommentRemover from "./CommentRemover";
class CommentCard extends Component {
  state = { username: this.props.user.username, isDelete: false };

  removeComment = () => {
    this.setState(currentState => {
      return { ...currentState, isDelete: true };
    });
  };

  render() {
    const {
      author,
      created_at,
      votes,
      body,
      comment_id,
      removeComment
    } = this.props;
    const time = formatTime(created_at);

    if (this.state.isDelete)
      return (
        <div className="single-comment">
          <p>This comment has been deleted</p>
        </div>
      );
    return (
      <div className="single-comment">
        <p className="grey-italic">
          created by {author} {time}
        </p>
        <p>{body}</p>
        <Voter id={comment_id} votes={votes} type="comments" /> <br />
        {this.state.username && this.state.username === author && (
          <CommentRemover
            comment_id={comment_id}
            removeComment={this.removeComment}
          />
        )}
      </div>
    );
  }
}

export default CommentCard;
