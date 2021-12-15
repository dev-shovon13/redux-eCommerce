import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light nav-bg">
        <div className="container">
          <Link to="/home" className="me-3">
            <img src={logo} alt="" className="" height="40px" />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 me-auto">
              <li className="nav-item me-3">
                <NavLink className="text-decoration-none" to="/home">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="text-decoration-none"
                  activeStyle={{
                    color: "red",
                    fontWeight: "bold",
                    borderBottom: "3px solid #CE8339",
                    paddingBottom: "11px",
                  }}
                  to="/"
                >
                  About
                </NavLink>
              </li>
            </ul>

            <button className="btn btn-outline-success" type="submit">
              Login
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
