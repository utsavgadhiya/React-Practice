import React from "react";

function Person(props) {
  const { name, skill } = props.person;
  return (
    <div>
      <h2>
        My Name is {name} and I know {skill}
      </h2>
    </div>
  );
}

export default Person;
