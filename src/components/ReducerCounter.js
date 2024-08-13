import React, { useReducer } from "react";

const initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    case "INCREMENTX8":
      return { count: state.count + 8 };
    default:
      return state;
  }
};

function ReducerCounter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  const changeValue = (type) => {
    dispatch({ type: type });
  };
  return (
    <div className="bg-warning text-dark">
      <h3 className="display-6">{state.count}</h3>
      <div className="btn-group">
        <button
          className="btn btn-primary"
          onClick={() => changeValue("INCREMENT")}
        >
          Increment
        </button>
        <button
          className="btn btn-success"
          onClick={() => changeValue("RESET")}
        >
          Reset
        </button>
        <button
          className="btn btn-danger"
          onClick={() => changeValue("DECREMENT")}
        >
          Decrement
        </button>
        <button
          className="btn btn-info"
          onClick={() => changeValue("INCREMENTX8")}
        >
          IncrementX8
        </button>
      </div>
    </div>
  );
}

export default ReducerCounter;
