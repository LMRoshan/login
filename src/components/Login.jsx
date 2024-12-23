/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import log from "../assets/loginimg.png";
import client from "../assets/user.png";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  // const PasswordInput = () => {
  //   const [showPassword, setShowPassword] = useState(false);

  //   const togglePasswordVisibility = () => {
  //     setShowPassword((prevState) => !prevState);
  //   };

 
  const [showPassword, setShowPassword] = useState(false);

  const PasswordVisibility = () => {
    setShowPassword((visible) => !visible);
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("submitted");
    const { email, password } = user;
    const res = await fetch("", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const json = await res.json();
    console.log("This is json/response", json);
    if (json.success) {
      localStorage.setItem("token", json.authToken);
      navigate("/home");
    } else {
      alert("Failed to signup, try again");
    }
  };

  //   } catch (error) {
  //     console.error("Error during login:", error);
  //     alert("Something went wrong, please try again later.");
  //   }
  // };

  const handleClick = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="container login-bg">
      <div className="row">
        <div className="col-md-6">
          <img src={log} alt="code" />
        </div>
        <div className="col-md-6 form-bg">
          <form onSubmit={handleSubmit}>
            <img src={client} alt="user" />
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleClick}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <div
                style={{
                  position: "relative",
                }}
              >
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={user.password}
                  onChange={handleClick}
                  className="form-control"
                  id="exampleInputPassword1"
                />
                <FontAwesomeIcon
                icon={showPassword ? faEyeSlash : faEye}
                  onClick={PasswordVisibility}
                  style={{
                    position: "absolute",
                    right: "10px",
                    top: "50%",
                    color: "#aaa",
                    cursor: "pointer",
                  }}
                />
              </div>
            </div>

            <div className="button">
              <button type="submit" className="btn">
                Submit
              </button>
              <Link className="nav-link" to="/signup">
                Create accout?
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
