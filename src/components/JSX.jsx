import React from "react";

const JSX = () => {

    const clickEvent = () => {
        alert('Click event triggered!')
    }

  return (
    <div className="container">
      <h1>Hello JSX!</h1>
      <button onClick={clickEvent}>Click Here</button>
    </div>
  );
};

export default JSX;
