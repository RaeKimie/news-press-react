import React, { Component } from "react";
import * as api from "../utils/api";
//import { Link } from "@reach/router";

class SignInUser extends Component {
  state = { username: "", avatar_url: "", name: "" };

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit = event => {
    event.preventDefault();
    this.getUserInfo();
  };

  getUserInfo = () => {
    api
      .fetchUserInfo(this.state.username)
      .then(user => {
        this.setState({ ...user });
      })
      .then(() => {
        this.props.addUserInfo(this.state);
      })
      .then(() => {
        this.setState({ username: "", avatar_url: "", name: "" });
      });
  };

  render() {
    return (
      <main>
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <input
              name="username"
              type="text"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
          <button>Sign in</button>
        </form>
      </main>
    );
  }
}

export default SignInUser;
