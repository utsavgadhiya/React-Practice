import React, { useEffect, useState } from "react";

function HookMouseOver() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log('Mouse Event')
    setX(e.clientX)
    setY(e.clientY)
  };

  useEffect(() => {
    console.log("useEffect");
    window.addEventListener("mousemove", logMousePosition);

    return () => { // return function in useEffect means that it's a useEffect cleanup function
      console.log('useEffect cleanup')
      window.removeEventListener('mousemove', logMousePosition)
    }

  }, []); // Empty array means that you don't need to watch any variables, meaning useEffect only runs once.

  return (
    <div>
      Hooks X - {x} Y - {y}
    </div>
  );
}

export default HookMouseOver;
