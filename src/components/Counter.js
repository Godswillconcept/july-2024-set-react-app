import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="p-5">
      <h2>Counter: {count}</h2>
      <div>
        <button className="mx-1 btn btn-success" onClick={handleIncrement}>
          Increment Count
        </button>
        <button
          className="mx-1 btn btn-outline-danger"
          onClick={handleDecrement}
        >
          Decrement Count
        </button>
        <button className="mx-1 btn btn-warning" onClick={handleReset}>
          Reset
        </button>
      </div>
    </div>
  );
}

export default Counter;
