import React from "react";
import { Link } from "@reach/router";

const WelcomeUser = props => {
  const { name, avatar_url } = props.user;
  return (
    <div>
      <h3>Hi {name}!</h3>
      <img src={`${avatar_url}`} alt={`img of ${name}`} />
      <Link to="/" className="op-link">
        <p>Back to the main page</p>
      </Link>
    </div>
  );
};

export default WelcomeUser;
