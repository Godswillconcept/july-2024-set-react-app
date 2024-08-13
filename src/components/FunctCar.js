import React, { useState } from "react";

function FunctCar() {
  const [car, setCar] = useState({
    name: "Chevrolet",
    model: 2024,
    color: "silver",
    doorNum: 5,
    price: "7000000000",
  });
  const { name, model, color, doorNum, price } = car;

  const handleUpdate = () => {
    setCar((prev) => ({...prev, color: 'dogderblue'}));
  }
  return (
    <div>
      {name}, {model}, {color}, {doorNum}, {price}
      <button onClick={handleUpdate} className="btn btn-success">Change Color in car</button>
    </div>
  );
}

export default FunctCar;
