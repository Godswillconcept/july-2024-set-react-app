import React, { useEffect, useState } from "react";

function FunctEffect() {
  const [isOpen, setIsOn] = useState(true);
  const [count, setCount] = useState(0);

  const toggleButton = () => {
    setIsOn(!isOpen);
  };
  useEffect(() => {
    setInterval(() => {
      setCount((count) => count + 1);
    }, 3000);
  }, []);
  return (
    <div className="p-2">
      FunctEffect
      <button
        className="btn btn-primary d-block"
        style={{ backgroundColor: isOpen ? `red` : `blue` }}
        onClick={toggleButton}
      >
        {isOpen ? "Off" : "On"}
      </button>
      <h3>{count}</h3>
    </div>
  );
}

export default FunctEffect;
