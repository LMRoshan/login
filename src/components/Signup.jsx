/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import log from "../assets/loginimg.png";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";


const Signup = () => {
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log("form is submitted");
    const [name, email, password] = credential
    const res = await fetch('', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    })
    const json = await res.json()
    console.log('This is json/response', json);
    if (json.success){
      localStorage.setItem('token', json.authToken)
      navigate('/login')
    } else{
      alert('Failed to signup, try again')
    }
  };

  const handleChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <div className="container login-bg">
      <div className="row">
        <div className="col-md-6">
          <img className="login-img" src={log} alt="login image" />
        </div>
        <div className="col-md-6 form-bg">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={credential.name}
                onChange={handleChange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputEmail1" className="form-label">
                Email address
              </label>
              <input
                type="email"
                name="email"
                value={credential.email}
                onChange={handleChange}
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="exampleInputPassword1" className="form-label">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={credential.password}
                onChange={handleChange}
                className="form-control"
                id="exampleInputPassword1"
              />
            </div>
            <div className="button">
              <button type="submit" className="btn">
                Submit
              </button>
              <Link className="nav-link" to="/login">
                Already have accout? login
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
