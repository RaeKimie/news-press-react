import React, { Component } from "react";
import Loader from "./Loader";
import CommentCard from "./CommentCard";
import * as api from "../utils/api";
import CommentAdder from "./CommentAdder";

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
  addNewComment = comment => {
    this.setState(currentState => {
      return {
        comments: [comment, ...currentState.comments],
        isLoading: false
      };
    });
  };

  render() {
    const { isLoading, comments } = this.state;
    if (isLoading) return <Loader />;
    return (
      <div>
        <CommentAdder
          user={this.props.user}
          uri={this.props.uri}
          addNewComment={this.addNewComment}
        />
        {comments.map(comment => {
          return <CommentCard key={comment.comment_id} {...comment} />;
        })}
      </div>
    );
  }
}

export default CommentList;
