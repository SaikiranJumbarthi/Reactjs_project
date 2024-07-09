import React, { useState } from "react";
import "./SignForm.css";

const SignForm = () => {
  const [navigationtoHomePage, setNavigationtoHomePage] = useState(false);
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    confirmpassword: "",
  });
  const { username, email, password, confirmpassword } = data;
  const changehandler = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    if (password === confirmpassword) {
      setNavigationtoHomePage(true);
      localStorage.setItem("userDetails", JSON.stringify(data));
      setTimeout(() => {
        window.location.href = "/"; // Redirect to the home page
      }, 10000);
    } else {
      alert("Check Your password ");
    }
    console.log(data);
  };

  return (
    <div className="container">
      <div className="innerContainer">
        <h1>Signup-Form</h1>
        {!navigationtoHomePage ? (
          <form onSubmit={submitHandler}>
            <label htmlFor="username">username:</label>
            <input
              type="text"
              placeholder="username"
              value={username}
              name="username"
              onChange={changehandler}
            />{" "}
            <br />
            <label htmlFor="email">email:</label>
            <input
              type="email"
              placeholder="email"
              value={email}
              name="email"
              onChange={changehandler}
            />{" "}
            <br />
            <label htmlFor="password">password</label>
            <input
              name="password"
              type="password"
              placeholder="password"
              value={password}
              onChange={changehandler}
            />{" "}
            <br />
            <label htmlFor="confirmpassword ">password</label>
            <input
              name="confirmpassword"
              type="password"
              placeholder="confirm-password"
              value={confirmpassword}
              onChange={changehandler}
            />{" "}
            <br />
            <button type="submit" className="submit-btn">
              Submit
            </button>
          </form>
        ) : (
          <span className="redirect">
            Form submitted successfully! Redirecting...
          </span>
        )}
      </div>
    </div>
  );
};

export default SignForm;
