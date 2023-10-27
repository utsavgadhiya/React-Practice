import React, { useState } from "react";
import HookMouseOver from "./HookMouseOver";

function MouseContainer() {
  const [display, setDisplay] = useState(true);
  return (
    <div>
      <button onClick={() => setDisplay(!display)}>Toggle Display</button>
      {display && <HookMouseOver></HookMouseOver>} {/* Only show HookMouseOver component if display is true */}
    </div>
  );
}

export default MouseContainer;
