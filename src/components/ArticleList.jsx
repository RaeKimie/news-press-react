import React, { Component } from "react";
import Loader from "./Loader";
import SortBy from "./SortBy";
import * as api from "../utils/api";
import { Link } from "@reach/router";

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
          return (
            <section className="article-card" key={article.article_id}>
              <Link to={`/articles/${article.article_id}`}>
                <h2>{article.title}</h2>
              </Link>
              <p>
                created by {article.author} time: {article.created_at}
              </p>
            </section>
          );
        })}
      </article>
    );
  }
}

export default ArticleList;
