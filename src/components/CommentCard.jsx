import React, { Component } from "react";

class CommentCard extends Component {
  render() {
    const { author, created_at, votes, body } = this.props;

    return (
      <div className="single-comment">
        <p>
          created by {author} time:{created_at}
        </p>
        <p>{body}</p>
        <p>{votes} votes</p>
      </div>
    );
  }
}

export default CommentCard;
