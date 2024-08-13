/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { FiSearch } from "react-icons/fi";

function Testimonials() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // findUserById(search);
    console.log(search);
  };

  // create a function to fetch a single user
//   const findUserById = (id) => {
//     fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
//       .then((response) => response.json())
//       .then((response) => console.log(response.json()))
//       .catch((e) => console.log(e));
//   };

  // create a function to fetch all users from the REST API
  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => setUsers(response))
      .catch((e) => console.log(e));
  };
  useEffect(fetchUsers, []);
  console.log(users);
//   console.log('result: ', result)
  return (
    <div className="container p-3">
      <button
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#searchModal"
      >
        Find User
      </button>
      {/* <a href='#searchModal' data-bs-toggle='modal' className="btn btn-primary">Find User</a> */}
      <div className="modal" id="searchModal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">Search for user with id</h4>
              <button className="btn-close" data-bs-dismiss="modal"></button>
            </div>
            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <input
                  type="number"
                  value={search.name}
                  onChange={handleChange}
                  name="search"
                  className="form-control my-3"
                  placeholder="Search... "
                />
                <button className="btn btn-success" type="submit">
                  Search
                  <FiSearch className="ms-1" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="row g-4 my-3">
        {users.map(({ id, name, username, phone, email }) => (
          <div className="col-4" key={id}>
            <div className="card">
              <div
                className="card-img-top movie_poster overflow-hidden"
                style={{
                  objectFit: "cover",
                }}
              >
                <img
                  src={`https://picsum.photos/350/200?random=${Math.floor(
                    Math.random() * 31
                  )}`}
                  className="img-fluid"
                  alt="Card image cap"
                />
              </div>
              <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text text-italic">{username}</p>
                <p className="card-text text-italic">{phone}</p>
                <p className="card-text text-italic">{email}</p>
                <button className="card-link btn btn-primary">Read More</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
