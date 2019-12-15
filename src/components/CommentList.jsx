import React, { Component } from "react";
import Loader from "./Loader";
import CommentCard from "./CommentCard";
import * as api from "../utils/api";

class CommentList extends Component {
  state = { comments: [], isLoading: true };

  componentDidMount() {
    this.getAllComments();
  }

  getAllComments() {
    api.fetchAllComments(this.props.uri).then(comments => {
      this.setState({ comments, isLoading: false });
    });
  }
  render() {
    const { isLoading, comments } = this.state;
    if (isLoading) return <Loader />;
    return (
      <div>
        {comments.map(comment => {
          return <CommentCard key={comment.comment_id} {...comment} />;
        })}
      </div>
    );
  }
}

export default CommentList;
