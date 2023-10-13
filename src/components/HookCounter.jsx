import React, { useState } from "react";

// useState is one of the hooks provided in react API, which provides the state and setState functionality of class components
// in fuctional components

function HookCounter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count {count}</button>
    </div>
  );
}

export default HookCounter;
