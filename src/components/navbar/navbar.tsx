import React from "react";
import './navbar.css'
import logo from "../../assets/Covelopers.png";

const Navbar: React.FC = () => {

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src={logo} alt="Covelopers Logo" className="logo-img" />
        <button className="get-started-btn">
          Get Started
        </button>
      </div>
    </nav>
  );
};

export default Navbar;