import React from "react";

function Columns() {
  return (
    <>
      {/* <> is a shorthand syntax for React.Fragment but if you use this you can't pass key attribute */}
      <td>Name</td>
      <td>Utsav</td>
    </>
  );
}

export default Columns;
