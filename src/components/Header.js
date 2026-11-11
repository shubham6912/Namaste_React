import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "url:../../public/FoodCardLogo.png";

const Header = () => {
  const [logInLogOut, setLogInLogOut] = useState("Login");

  const handleLogin = () => {
    setLogInLogOut((prev) => (prev === "Login" ? "Logout" : "Login"));
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Food Card Logo" />
      </div>

      <nav className="navItem">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>Cart</li>
          <li>
            <button className="login-btn" onClick={handleLogin}>
              {logInLogOut}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
