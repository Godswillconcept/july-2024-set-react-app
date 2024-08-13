import React, { useState } from "react";
const FunctionColor = () => {
  const [color, setColor] = useState("cyan");

  const handleChange = () => {
    if (color === "cyan") {
      setColor("red");
    } else {
      setColor("cyan");
    }
  };
  return (
    <div className="my-2">
      <h5 style={{ color: color }}>
        FunctionColor: It has {color} color as well
      </h5>
      <button className="btn btn-outline-info" onClick={handleChange}>Change Color</button>
    </div>
  );
};

export default FunctionColor;
