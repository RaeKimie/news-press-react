import React, { Component } from "react";
import Loader from "./Loader";
import SortBy from "./SortBy";
import * as api from "../utils/api";

import ArticleCard from "./ArticleCard";

class ArticleList extends Component {
  state = { articles: [], isLoading: true, author: "" };

  componentDidMount() {
    this.getAllArticles();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.author !== this.state.author) this.getAllArticles();
  }

  getAllArticles() {
    api.fetchAllArticles(this.state.author).then(articles => {
      this.setState(currentState => {
        return { ...currentState, articles, isLoading: false };
      });
    });
  }

  addSorter = author => {
    this.setState(currentState => {
      return { ...currentState, author };
    });
  };

  render() {
    const { isLoading, articles } = this.state;
    if (isLoading) return <Loader />;
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
