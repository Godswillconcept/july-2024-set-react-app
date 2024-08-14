/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { useEffect, useState } from "react";
import { HiSearch } from "react-icons/hi";
import UserView from "../components/UserView";
import { useNavigate } from "react-router-dom";

function Testimonials() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [result, setResult] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let searchData = users.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setResult(searchData);
    setSearch("");
    const resultData = [...searchData];
    navigate("/search", { state: {"result": resultData, "searchValue": search} });

  };

  // create a function to fetch all users from the REST API
  const fetchUsers = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((response) => setUsers(response))
      .catch((e) => console.log(e));
  };
  useEffect(fetchUsers, []);
  return (
    <div className="container p-3">
      <form
        onSubmit={handleSubmit}
        className="d-flex justify-content-center align-items-between"
      >
        <input
          id="search"
          type="search"
          getElementById="search"
          name="search"
          onChange={handleChange}
          value={search}
          className="form-control w-25 me-2"
          style={{ display: "none" }}
        />
      </form>
        <button
          className="btn btn-outline-success rounded-circle"
          onClick={() => {
            const searchInput = document.getElementById("search");
            if (searchInput) {
              searchInput.style.display = "block";
            }
            searchInput.style.display = "block";
          }}
        >
          <HiSearch />
        </button>
      <UserView users={users} />
    </div>
  );
}

export default Testimonials;
