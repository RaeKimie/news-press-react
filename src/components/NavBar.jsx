import React, { Component } from "react";
import { Link } from "@reach/router";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <Link to="/sign-in">
          <button>Sign in</button>
        </Link>
      </nav>
    );
  }
}

export default NavBar;
