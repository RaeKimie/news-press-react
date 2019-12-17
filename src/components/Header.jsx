import React from "react";
import NavBar from "./NavBar";

const Header = props => {
  const { name } = props.user;
  return (
    <header>
      <h1>News-press</h1>
      <NavBar user={name} />
      {name && <p className="user">{name}</p>}
    </header>
  );
};

export default Header;
