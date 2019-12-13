import React, { Component } from "react";
import Loader from "./Loader";
import SortBy from "./SortBy";
import * as api from "../utils/api";

import ArticleCard from "./ArticleCard";

class ArticleList extends Component {
  state = { articles: [], isLoading: true };

  componentDidMount() {
    this.getAllArticles();
  }

  getAllArticles() {
    api.fetchAllArticles().then(articles => {
      this.setState({ articles, isLoading: false });
    });
  }

  render() {
    const { isLoading, articles } = this.state;
    if (isLoading) return <Loader />;
    return (
      <article>
        <SortBy />
        <br />

        {articles.map(article => {
          return <ArticleCard key={article.article_id} {...article} />;
        })}
      </article>
    );
  }
}

export default ArticleList;
