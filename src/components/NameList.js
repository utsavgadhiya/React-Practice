import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: "Bruce",
      skill: "React",
    },
    {
      id: 2,
      name: "Clark",
      skill: "Angular",
    },
    {
      id: 3,
      name: "Diana",
      skill: "Vue",
    }
  ];
  const personList = persons.map((person) => (
    <Person person={person} key={person.id}></Person>
  ));
  return <div>{personList}</div>;
}

export default NameList;
