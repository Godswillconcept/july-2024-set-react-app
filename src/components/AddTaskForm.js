import React from "react";

function AddTaskForm({ task, handleChange, handleSubmit }) {
  return (
    <form
      className="my-2 border border-2 rounded p-2"
      onSubmit={handleSubmit}
    >
      <textarea
        name="title"
        placeholder="Enter title"
        className="form-control mb-3"
        onChange={handleChange}
        value={task.title}
      ></textarea>
      <input
        type="text"
        className="form-control mb-2"
        placeholder="Task category"
        name="category"
        onChange={handleChange}
        value={task.category}
      />
      <button className="btn btn-primary">Add Task</button>
    </form>
  );
}

export default AddTaskForm;
