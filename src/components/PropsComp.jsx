import React from "react";

// Props are immutable

const PropsComp = (props) => {
  console.log(props);
  const { name, age } = props;
  // Function could only one HTML element
  return (
    <div>
      <h1>
        Hello {name}. You are {age} years old!
      </h1>
      {props.children}
    </div>
  );
};

export default PropsComp;
