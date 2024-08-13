import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, complete: !todo.complete };
        } else {
          return todo;
        }
      });

    default:
      return state;
  }
};

const initialTodos = [
  { id: 1, title: "Start Coding...", complete: true },
  { id: 2, title: "Finish React Course", complete: false },
  { id: 3, title: "Learn React Hooks", complete: false },
  { id: 4, title: "Learn Redux", complete: false },
  { id: 5, title: "Finish React Project", complete: false },
];

function ReducerTodo() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };
  return (
    <div className="bg-info">
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
        </div>
      ))}
    </div>
  );
}

export default ReducerTodo;
