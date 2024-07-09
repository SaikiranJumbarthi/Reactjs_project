import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Coin from "./Pages/Coin/Coin";
import Footer from "./Components/Footer/Footer";
import LoginForm from "./Loginform/LoginForm";
import SignForm from "./Components/SignForm/SignForm";

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coin/:coinId" element={<Coin />} />
        <Route path="/SignForm" element={<SignForm />} />
        <Route path="/LoginForm" element={<LoginForm />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
