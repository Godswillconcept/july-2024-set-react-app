import { NavLink } from "react-router-dom";
import { TbAtomOff } from "react-icons/tb";
import { useContext, useState } from "react";
import { UserContext } from "../contexts/userContext";
function NavBar() {
  const { user, login, logout } = useContext(UserContext);
  const [name, setName] = useState("");
  const handleChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(name);
    setName("");
  };
  const navData = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Teams", path: "/teams" },
    { name: "Testimonials", path: "/testimonials" },
    { name: "Gallery", path: "/gallery" },
    { name: "Departments", path: "/departments" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Facilities", path: "/facilities" },
    { name: "Statistics", path: "/statistics" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark sticky-top">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            <TbAtomOff size={32} color="yellow" />
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav mx-auto">
              {navData.map(({ name, path }, i) => (
                <li className="nav-item" key={i}>
                  <NavLink className="nav-link" aria-current="page" to={path}>
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {user !== null && (
            <button className="btn btn-danger" onClick={logout}>
              Logout
            </button>
          )}
        </div>
      </nav>

      <div
        className={`alert alert-success alert-dismissible w-50 d-block mx-auto mt-4 ${
          user === null ? `d-none` : `d-block`
        }`}
      >
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
        ></button>
        <marquee>
          <strong>Welcome!</strong>{" "}
          {user === null
            ? "Guest. Sign in to continue."
            : `${user.name}. Explore more from ShopEx store`}
          .
        </marquee>
      </div>
    </>
  );
}

export default NavBar;
