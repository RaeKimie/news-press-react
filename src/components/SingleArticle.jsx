import React, { Component } from "react";
import CommentList from "./CommentList";
import { Router, Link } from "@reach/router";
import Loader from "./Loader";
import * as api from "../utils/api";

class SingleArticle extends Component {
  state = { article: {}, isLoading: true };

  componentDidMount() {
    this.getSingleArticle();
  }
  getSingleArticle() {
    api.fetchSingleArticle(this.props.article_id).then(article => {
      this.setState({ article, isLoading: false });
    });
  }

  render() {
    const { article, isLoading } = this.state;

    if (isLoading) return <Loader />;
    return (
      <article>
        <div className="single-article">
          <h1> {article.title}</h1>
          <p>
            posted by {article.author}. posted time: {article.created_at}
          </p>
          <p>{article.body}</p>
          <Link to={`/articles/${article.article_id}/comments`}>
            <p>{article.comment_count} comments </p>
          </Link>
        </div>
        <Router>
          <CommentList path="comments" />
        </Router>
      </article>
    );
  }
}

export default SingleArticle;
