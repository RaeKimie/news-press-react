import React, { Component } from "react";
import { formatTime } from "../utils/utils";

class CommentCard extends Component {
  render() {
    const { author, created_at, votes, body } = this.props;
    const time = formatTime(created_at);
    return (
      <div className="single-comment">
        <p className="grey-italic">
          created by {author} {time}
        </p>
        <p>{body}</p>
        <p>{votes} votes</p>
      </div>
    );
  }
}

export default CommentCard;
