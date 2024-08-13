import React, { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";

function Login() {
  const { login } = useContext(UserContext);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((user) => ({ ...user, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(user);
    setUser({ name: "", email: "", password: "" });
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-6 bg-primary" style={{ height: "79vh" }}></div>
        <div className="col-6">
          <form onSubmit={handleSubmit} style={{ margin: "100px 0" }}>
            <div className="form-group my-3">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                name="name"
                value={user.name}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <button className="btn btn-success px-3 rounded-pill">
              Login Now!
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
