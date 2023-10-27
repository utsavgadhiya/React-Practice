import React, { useState, useEffect } from "react";

function HookCounterFive() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  useEffect(() => {
    console.log("useEffect()");
    document.title = `You clicked ${count} times!`;
  }, [count]); // the second parameter of useEffect() is an array consisting of dependencies which it needs to watch for changes to re-render

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>
      <button onClick={() => setCount(count + 1)}>Click {count} times</button>
    </div>
  );
}

export default HookCounterFive;
