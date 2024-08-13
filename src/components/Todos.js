import React, { memo } from "react";
const Todos = ({ todos }) => {
  return (
    <>
      <h1>All Todos</h1>

      {todos.map((todo, index) => (
        <h2 key={index}>{todo}</h2>
      ))}
    </>
  );
};

export default memo(Todos);
