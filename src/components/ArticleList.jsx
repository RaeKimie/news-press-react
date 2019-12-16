import React, { Component } from "react";
import Loader from "./Loader";
import SortBy from "./SortBy";
import * as api from "../utils/api";

import ArticleCard from "./ArticleCard";
import ErrDisplayer from "./ErrDisplayer";

class ArticleList extends Component {
  state = { articles: [], isLoading: true, err: "", author: "" };
  //add more properties in this state. (query)
  componentDidMount() {
    this.getAllArticles();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevState.author !== this.state.author)
      //add more logic here when preve.state.query is not the same
      this.getAllArticles();
  }

  getAllArticles() {
    //give more query to the fetchAllArticles
    api
      .fetchAllArticles(this.state.author)
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

  addSorter = author => {
    this.setState(currentState => {
      return { ...currentState, author };
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
