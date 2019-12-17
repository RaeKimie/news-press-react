import React, { Component } from "react";
import * as api from "../utils/api";
import WelcomeUser from "./WelcomeUser";
import ErrDisplayer from "./ErrDisplayer";

class SignInUser extends Component {
  state = {
    user: { username: "", avatar_url: "", name: "" },
    isUser: false,
    err: ""
  };

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
      })
      .catch(({ response }) => {
        const msg = `${response.status} ${response.data.msg}`;
        this.setState({ err: msg, isLoading: false });
      });
  };

  render() {
    const { user, isUser, err } = this.state;
    if (err) return <ErrDisplayer err={err} />;

    return (
      <main className="user-login">
        {isUser || this.props.user.username ? (
          <WelcomeUser user={this.props.user} />
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
            <p className="grey-italic">e.g. tickle122</p>
            <button>Sign in</button>
          </form>
        )}
      </main>
    );
  }
}

export default SignInUser;
