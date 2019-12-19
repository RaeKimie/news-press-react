import React, { Component } from "react";
import CommentList from "./CommentList";
import { Router, Link } from "@reach/router";
import Loader from "./Loader";
import * as api from "../utils/api";
import ErrDisplayer from "./ErrDisplayer";
import Voter from "./Voter";
import { formatTime } from "../utils/utils";

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
    const time = formatTime(article.created_at);
    return (
      <article>
        <div className="single-article">
          <p className="grey-italic">{article.topic}</p>
          <Link to={`/articles/${article.article_id}`}>
            <h1> {article.title}</h1>
          </Link>
          <p className="grey-italic">
            posted by {article.author} date: {time}
          </p>
          <p>{article.body}</p>
          <Voter id={this.props.article_id} votes={article.votes} />
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
