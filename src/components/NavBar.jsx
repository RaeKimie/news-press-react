import React, { Component } from "react";
import { Link } from "@reach/router";

class NavBar extends Component {
  render() {
    return (
      <nav>
        <Link to="/">
          <button>Home</button>
        </Link>
        <button>Sign in</button>
      </nav>
    );
  }
}

export default NavBar;
