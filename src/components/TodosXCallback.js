import React, { memo } from "react";
const TodosXCallback = ({ todos, todo, addTodo, handleChange }) => {
  console.log("child render");
  return (
    <>
      <h1>All Todos</h1>

      {todos.map((todo, index) => (
        <h2 key={index}>{todo}</h2>
      ))}

      <input type="text" name="todo" value={todo} onChange={handleChange} />
      <button className="btn btn-secondary" onClick={addTodo}>
        Add Todo
      </button>
    </>
  );
};

export default memo(TodosXCallback);
