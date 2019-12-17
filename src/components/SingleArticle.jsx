import React, { Component } from "react";
import CommentList from "./CommentList";
import { Router, Link } from "@reach/router";
import Loader from "./Loader";
import * as api from "../utils/api";
import ErrDisplayer from "./ErrDisplayer";
import Voter from "./Voter";

class SingleArticle extends Component {
  state = { article: {}, isLoading: true, err: "" };

  componentDidMount() {
    this.getSingleArticle();
  }
  getSingleArticle() {
    api
      .fetchSingleArticle(this.props.article_id)
      .then(article => {
        this.setState({ article, isLoading: false });
      })
      .catch(({ response }) => {
        const msg = `${response.status} ${response.data.msg}`;
        this.setState({ err: msg, isLoading: false });
      });
  }

  render() {
    const { article, isLoading, err } = this.state;

    if (isLoading) return <Loader />;
    if (err) return <ErrDisplayer err={err} />;
    return (
      <article>
        <Voter article_id={this.props.article_id} votes={article.votes} />
        <div className="single-article">
          <p className="grey-italic">{article.topic}</p>
          <h1> {article.title}</h1>
          <p className="grey-italic">
            posted by {article.author}. posted time: {article.created_at}
          </p>
          <p>{article.body}</p>
          <Link to={`/articles/${article.article_id}/comments`}>
            <p>{article.comment_count} comments </p>
          </Link>
        </div>
        <Router>
          <CommentList path="comments" user={this.props.user} />
        </Router>
      </article>
    );
  }
}

export default SingleArticle;
