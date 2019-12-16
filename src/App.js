import React, { Component } from "react";
import Header from "./components/Header";
import "./App.css";
import { Router } from "@reach/router";
import SingleArticle from "./components/SingleArticle";
import ArticleList from "./components/ArticleList";
import ErrDisplayer from "./components/ErrDisplayer";
import SignInUser from "./components/SignInUser";

class App extends Component {
  state = { username: "", avatar_url: "", name: "" };

  addUserInfo = userInfo => {
    this.setState({ ...userInfo }, () => {
      console.log(this.state, "App state");
    });
  };

  render() {
    return (
      <div className="App">
        <Header />
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
