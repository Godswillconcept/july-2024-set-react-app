import React, { useState, useEffect, useRef } from "react";

function RefComp() {
    const [inputValue, setInputValue] = useState("");
  const [textValue, setTextValue] = useState("");
    const count = useRef(0);
  const fname = useRef();
  const lname = useRef();
  const email = useRef();
  const previousTextValue = useRef("");

    useEffect(() => {
      count.current = count.current + 1;
    });


  useEffect(() => {
    previousTextValue.current = textValue;
  }, [textValue]);

  const handleFocus = () => {
    email.current.focus();
  };
  return (
    <div className="container" onLoad={handleFocus}>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
      <div className="row g-2">
        <div className="col">
          <input
            className=" form-control"
            type="text"
            ref={fname}
            placeholder="First Name"
          />
        </div>
        <div className="col">
          <input
            className=" form-control"
            type="text"
            ref={lname}
            placeholder="Last Name"
          />
        </div>
        <div className="col">
          <input
            className=" form-control"
            type="email"
            ref={email}
            placeholder="Email"
          />
        </div>
      </div>

      <button className="btn btn-info" onClick={handleFocus}>
        Focus Email input
      </button>
      <input
        type="text"
        value={textValue}
        onChange={(e) => setTextValue(e.target.value)}
      />
      <h2>Current Value: {textValue}</h2>
      <h2>Previous Value: {previousTextValue.current}</h2>
    </div>
  );
}

export default RefComp;
