import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import { Router } from "@reach/router";
import SingleArticle from "./components/SingleArticle";
import ArticleList from "./components/ArticleList";
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Router>
          <ArticleList path="/" />
          <SingleArticle path="/articles/:article_id" />
        </Router>
      </div>
    );
  }
}

export default App;
