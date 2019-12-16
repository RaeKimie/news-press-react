import React, { Component } from "react";
import Loader from "./Loader";
import SortBy from "./SortBy";
import * as api from "../utils/api";

import ArticleCard from "./ArticleCard";
import ErrDisplayer from "./ErrDisplayer";

class ArticleList extends Component {
  state = {
    articles: [],
    isLoading: true,
    err: "",
    author: "",
    topic: "",
    sort_by: "created_at"
  };

  componentDidMount() {
    this.getAllArticles();
  }
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.author !== this.state.author ||
      prevState.topic !== this.state.topic ||
      prevState.sort_by !== this.state.sort_by
    )
      this.getAllArticles();
  }

  getAllArticles() {
    const { author, topic, sort_by } = this.state;
    api
      .fetchAllArticles(author, topic, sort_by)
      .then(articles => {
        this.setState(currentState => {
          return { ...currentState, articles, isLoading: false };
        });
      })
      .catch(({ response }) => {
        const msg = `${response.status} ${response.data.msg}`;
        this.setState({ err: msg, isLoading: false });
      });
  }

  addSorter = (author, topic, sort_by) => {
    this.setState(currentState => {
      return { ...currentState, author, topic, sort_by };
    });
  };

  render() {
    const { isLoading, articles, err } = this.state;
    if (isLoading) return <Loader />;
    if (err) return <ErrDisplayer err={err} />;
    return (
      <article>
        <SortBy addSorter={this.addSorter} />
        <br />

        {articles.map(article => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </article>
    );
  }
}

export default ArticleList;
