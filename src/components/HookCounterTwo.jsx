import React, { useState } from "react";

function HookCounterTwo() {
  const initialCount = 0;
  const [count, setCount] = useState(initialCount);

  const incrementFive = () => {
    setCount((prevCount) => prevCount + 5);
  };

  // using prevState to change the state is a safer option

  // Diff bet `incrementFive()` and `() => incrementFive()`:
  // When you want to execute a function immediately during the rendering of the DOM, you can call it directly by its name, i.e. incrementFive
  // However, when you want to execute the function in response to an event (like onClick or onHover),
  // you should use an arrow function to ensure that the function is executed only when the event occurs. i.e. () => incrementFive()

  return (
    <div>
      Count: {count}
      <button onClick={() => setCount(initialCount)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={() => incrementFive()}>Increment 5</button>
    </div>
  );
}

export default HookCounterTwo;
