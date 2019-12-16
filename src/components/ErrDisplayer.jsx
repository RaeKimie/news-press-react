import React from "react";

const ErrDisplayer = ({ err }) => {
  const msg = err ? err : "page not found";
  return <h3>{msg}</h3>;
};

export default ErrDisplayer;
