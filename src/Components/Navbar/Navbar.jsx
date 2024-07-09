import React, { useContext, useState } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import arrow_icon from "../../assets/arrow_icon.png";
import profile_pic from "../../assets/profile_pic.png";
import { CoinContext } from "../../Context/CoinContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  // const [userdetails, setUsetDetails] = useState({});
  // setUsetDetails(
  //   localStorage.getItem("userDetails")
  //     ? JSON.parse(localStorage.getItem("userDetails"))
  //     : {}
  // );
  // console.log(userdetails);
  const { setCurrency } = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch (event.target.value) {
      case "usd": {
        setCurrency({ name: "usd", symbol: "$" });
        break;
      }
      case "eur": {
        setCurrency({ name: "eur", symbol: "€" });
        break;
      }
      case "inr": {
        setCurrency({ name: "inr", symbol: "₹" });
        break;
      }
      default: {
        setCurrency({ name: "usd", symbol: "$" });
      }
    }
  };
  /*   onLogout = () => {
    localStorage.removeItem("userDetails");
  }; */
  return (
    <div className="navbar">
      <Link to={"/"}>
        <img src={logo} alt="logo" className="logo" />
      </Link>
      <ul>
        <Link to={"/"}>
          <li>Home</li>{" "}
        </Link>
        <li>Features</li>
        <li>Pricing</li>
        <li>Blog</li>
      </ul>
      <div className="nav-right">
        <select onChange={currencyHandler}>
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="inr">INR</option>
        </select>
        {/* {!userdetails ? (
          <Link to={"/SignForm"}>
            {" "}
            <button>
              Sign up <img src={arrow_icon} alt="icon" />{" "}
            </button>
          </Link>
        ): (
            <button onClick={onLogout}>
              Log Out  <img src={arrow_icon} alt="icon" />{" "}
            </button>
          }) */}
        <Link to="/LoginForm">
          <button>Login</button>
        </Link>
        <Link to={"/SignForm"}>
          {" "}
          <button>
            Sign up <img src={arrow_icon} alt="icon" />{" "}
          </button>
        </Link>
        {/* <Link to={"/Profile"}>
          <button>
            Profile <img src={profile_pic} alt="profile" />
          </button>
        </Link> */}
        <button>Profile</button>
      </div>
    </div>
  );
};

export default Navbar;
