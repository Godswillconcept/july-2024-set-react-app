import React, { createContext, useState } from "react";
import UserTable from "./UserTable";
export const UsersContext = createContext();

function UserForm() {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
  });

  // method to handle changes

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  // method to submit form

  const handleSubmit = (e) => {
    e.preventDefault();
    setUsers([...users, user]);
    setUser({
      name: "",
      email: "",
      phone: "",
    });
    console.log(users);
  };
  return (
    <UsersContext.Provider value={users}>
      <form className="w-50 mx-auto p-3" onSubmit={handleSubmit} id="userForm">
        <div className="form-group my-3">
          <label className="form-label" htmlFor="name">
            Name:
          </label>
          <input
            onChange={handleChange}
            className="form-control"
            type="text"
            name="name"
            id="name"
            value={user.name}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="email">
            Email:
          </label>
          <input
            onChange={handleChange}
            className="form-control"
            type="email"
            name="email"
            id="email"
            value={user.email}
          />
        </div>
        <div className="form-group mb-3">
          <label className="form-label" htmlFor="phone">
            Phone:
          </label>
          <input
            onChange={handleChange}
            className="form-control"
            type="tel"
            name="phone"
            id="phone"
            value={user.phone}
          />
        </div>
        <button className="btn btn-success" form="userForm">
          Add User
        </button>
      </form>
      <UserTable />
    </UsersContext.Provider>
  );
}

export default UserForm;
