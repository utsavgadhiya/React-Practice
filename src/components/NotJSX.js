import React from "react";

const NotJSX = () => {
  return React.createElement(
    "div",
    { id: "txt", className: "container" },
    React.createElement("h1", null, "Hello Not JSX!")
  );
};

export default NotJSX;
