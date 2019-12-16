import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import { Router } from "@reach/router";
import SingleArticle from "./components/SingleArticle";
import ArticleList from "./components/ArticleList";
import ErrDisplayer from "./components/ErrDisplayer";
import SignInUser from "./components/SignInUser";

class App extends Component {
  state = { user: {} };

  addUserInfo = userInfo => {
    this.setState({ ...userInfo });
  };

  render() {
    return (
      <div className="App">
        <Header user={this.state} />
        <Router>
          <ArticleList path="/" user={this.state} />
          <SignInUser path="/sign-in" addUserInfo={this.addUserInfo} />
          <SingleArticle path="/articles/:article_id/*" />
          <ErrDisplayer default />
        </Router>
      </div>
    );
  }
}

export default App;
