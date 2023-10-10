import React from "react";

// Arrow function is a way to transfer data or attribute from Child to Parent Component

function ChildComponent(props) {
  return (
    <div>
      <button onClick={props.greetHandler}>Greet Parent</button>
      <br />
      <button onClick={() => props.greetHandlerV2("Child")}>Greet Child</button>
    </div>
  );
}

export default ChildComponent;
