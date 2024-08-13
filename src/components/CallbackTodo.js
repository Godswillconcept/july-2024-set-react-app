import React, { useState, useCallback } from "react";
import TodosXCallback from "./TodosXCallback";
const CallbackTodo = () => {
  const [count, setCount] = useState(0);

  const [todos, setTodos] = useState([
    "Learning html",
    "Learning CSS",
    "Learning Bootstrap",
    "Learning Javascipt",
    "react loading...",
  ]);

  const [todo, setTodo] = useState("");
  const incrementCount = () => {
    setCount((count) => count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((todos) => [...todos, todo]);
    setTodo("");
  }, [todo]);

  const handleChange = (e) => {
    const { value } = e.target;
    setTodo(value);
  };
  return (
    <>
      <h3>Count: {count}</h3>
      <button className="btn btn-danger" onClick={incrementCount}>
        +
      </button>
      <TodosXCallback
        todos={todos}
        addTodo={addTodo}
        todo={todo}
        handleChange={handleChange}
      />
    </>
  );
};

export default CallbackTodo;
