import React, { createContext, useState } from "react";
import ComponentC from "./ComponentC";
export const NameContext = createContext();

function ComponentA() {
  const [name, setName] = useState("Olatunji Abass");
  return (
    <NameContext.Provider value={name}>
      <div className="bg-primary">
        ComponentA
        <h2>Sending name value from the parent - ComponentA {name}</h2>
        {/* <ComponentC name={name} /> */}
        <ComponentC />
      </div>
    </NameContext.Provider>
  );
}

export default ComponentA;
