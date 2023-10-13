import React from "react";

function MemoComp(props) {
  const name = props.name;
  return <div>{name}</div>;
}

export default React.memo(MemoComp);
