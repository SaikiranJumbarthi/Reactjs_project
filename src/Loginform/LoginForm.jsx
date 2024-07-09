import React, { useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const [data, setData] = useState({
    username: "",
    password: "",
  });
  const { username, password } = data;
  const changeHandler = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
  };
  return (
    <div className="container">
      <div className="innerContainer">
        <form onSubmit={submitHandler}>
          <h1>Login Form</h1>
          <label htmlFor="username">username:</label>
          <input
            type="text"
            placeholder="username"
            name="username"
            value={username}
            onChange={changeHandler}
          />
          <br />
          <label htmlFor="password">password:</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={password}
            onChange={changeHandler}
          />
          <br />
          <Link to="/" className="submit-btn">
            <button type="submit" className="sub-btn">
              Submit
            </button>
          </Link>
          <br />
          <Link to={"/SignForm"}>
            <button>CREATE NEW ACCOUNT</button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
