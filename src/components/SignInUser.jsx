import React, { Component } from "react";
import * as api from "../utils/api";
import WelcomeUser from "./WelcomeUser";
import ErrDisplayer from "./ErrDisplayer";
import Loader from "./Loader";

class SignInUser extends Component {
  state = {
    user: { username: "", avatar_url: "", name: "" },
    isUser: false,
    isLoading: false,
    err: ""
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.err)
      this.setState(() => {
        return { err: "" };
      });
  }

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
    this.setState({ isLoading: true });
    api
      .fetchUserInfo(this.state.user.username)
      .then(user => {
        this.setState({ user, isUser: true, isLoading: false });
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
    if (this.state.isLoading) return <Loader />;
    const { isUser, err } = this.state;
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
                className="space-left "
              />
            </label>
            <p className="grey-italic margin-top">e.g. grumpy19 or jessjelly</p>
            <button className="button margin-top">Sign in</button>
          </form>
        )}
      </main>
    );
  }
}

export default SignInUser;
