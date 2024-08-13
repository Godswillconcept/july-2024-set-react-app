import React, { useContext } from "react";
import { NameContext } from "./ComponentA";

function ComponentE() {
  const name = useContext(NameContext);
  return (
    <div className="bg-warning">
      ComponentE
      <h2>You've arrived at your destination</h2>
      {name}
    </div>
  );
}

export default ComponentE;
