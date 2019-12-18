import React from "react";
import { Link } from "@reach/router";
const NavBar = props => {
  return (
    <nav>
      <Link to="/">
        <button className="button">Home</button>
      </Link>

      <Link to="/sign-in">
        <button className="button">
          {!props.user ? `Sign in` : `My page`}
        </button>
      </Link>
    </nav>
  );
};

export default NavBar;
