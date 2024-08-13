import React from "react";
import ReducerTodo from "../components/reducerTodo";
import ReducerCounter from "../components/ReducerCounter";
import ReducerTask from "../components/ReducerTask";

function Statistics() {
  return (
    <div className="container-fluid text-center">
      <ReducerTodo />
      <ReducerCounter />
      <ReducerTask />
    </div>
  );
}

export default Statistics;
