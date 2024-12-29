/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaCartArrowDown } from "react-icons/fa6";
import productContext from "../context/ProductContext";

const Navbar = (props) => {
  const context = useContext(productContext);
  const {
    state: { cart },
  } = context;

  return (
    <div>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">
            React
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
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/home"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/signup">
                  Sign Up
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/login">
                  Login
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/profile">
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/user">
                  User
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link position-relative" to="/cartItems">
                  <FaCartArrowDown />
                  <span className="position-absolute top-10 start-100 translate-middle badge rounded-pill bg-danger">
                    {cart.length}
                    <span className="visually-hidden">unread messages</span>
                  </span>
                </Link>
              </li>
            </ul>

            <button
              onClick={props.toggleMode}
              className="btn btn-success"
              type="submit"
            >
              {props.btnText}
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
