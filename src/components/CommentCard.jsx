import React, { Component } from "react";
import { formatTime } from "../utils/utils";
import Voter from "./Voter";

class CommentCard extends Component {
  state = { username: this.props.user.username };
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
    console.log(this.state.username, "in commentCard");
    return (
      <div className="single-comment">
        <p className="grey-italic">
          created by {author} {time}
        </p>
        <p>{body}</p>
        <Voter id={comment_id} votes={votes} type="comments" />
      </div>
    );
  }
}

export default CommentCard;
