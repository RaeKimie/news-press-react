import React, { Component } from "react";
import * as api from "../utils/api";
import WelcomeUser from "./WelcomeUser";
//import { Link } from "@reach/router";

class SignInUser extends Component {
  state = { user: { username: "", avatar_url: "", name: "" }, isUser: false };

  handleChange = event => {
    const value = event.target.value;
    this.setState(currentState => {
      return {
        ...currentState,
        user: { ...currentState.user, username: value }
      };
    });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.getUserInfo();
  };

  getUserInfo = () => {
    api
      .fetchUserInfo(this.state.user.username)
      .then(user => {
        this.setState({ user, isUser: true });
      })
      .then(() => {
        this.props.addUserInfo(this.state.user);
      })
      .then(() => {
        this.setState(currentState => {
          return {
            ...currentState,
            user: { ...currentState.user, username: "" }
          };
        });
      });
  };

  render() {
    const { user, isUser } = this.state;
    return (
      <main className="user-login">
        {isUser ? (
          <WelcomeUser user={user} />
        ) : (
          <form onSubmit={this.handleSubmit}>
            <label>
              Username:
              <input
                name="username"
                type="text"
                value={this.state.user.username}
                onChange={this.handleChange}
              />
            </label>
            <button>Sign in</button>
          </form>
        )}
      </main>
    );
  }
}

export default SignInUser;
