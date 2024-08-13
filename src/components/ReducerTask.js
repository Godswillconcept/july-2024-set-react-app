import React, { useReducer, useState } from "react";
import AddTaskForm from "./AddTaskForm";
import { BsTrash } from "react-icons/bs";

const initialState = {
  tasks: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { tasks: [...state.tasks, action.payload] };
    case "REMOVE":
      return {
        tasks: state.tasks.filter(
          (task) => task.title !== action.payload.title
        ),
      };

    case "CLEAR":
      return { tasks: [] };

    default:
      return state;
  }
};

function ReducerTask() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [task, setTask] = useState({
    title: "",
    category: "",
    time: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTask((task) => ({ ...task, [name]: value, time: Date.now() }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "ADD", payload: task });
    setTask({
      title: "",
      category: "",
      time: "",
    });
  };
  console.log("tasks", state.tasks);
  return (
    <div className="">
      <h1>ReducerTask</h1>
      <div className="row g-3">
        <div className="col-md-4">
          <AddTaskForm
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            task={task}
          />
        </div>
        <div className="col-md-8">
          <div className="d-flex justify-content-between align-items-center">
            <h3>Tasks</h3>
            <button
              className="btn btn-outline-danger"
              onClick={() => dispatch({ type: "CLEAR" })}
            >
              Clear All <BsTrash />
            </button>
          </div>
          <p className="fst-italic">
            {state.tasks.length === 0 ? "Please add a task" : "Fetching tasks"}
            <ul className="list-group">
              {state.tasks.map((task, i) => (
                <li key={i} className="list-group-item">
                  <div className="text-start">
                    <h5>{task.title}</h5>
                    <p>{task.category}</p>
                    <p>{new Date(task.time).toLocaleString()}</p>
                    <button
                      className="btn btn-danger"
                      onClick={() =>
                        dispatch({ type: "REMOVE", payload: task })
                      }
                    >
                      Delete
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReducerTask;
