
import { useEffect, useState } from "react";
import logo from "url:../../public/FoodCardLogo.png";

const Header = () => {
  const [logInLogOut, setLogInLogOut] = useState("Login");

  const handleLogin = () => {
    setLogInLogOut((prev) =>
      prev === "Login" ? "Logout" : "Login"
    );
  };

  return (
    <div className="header">
      <div className="logo">
        <img src={logo} alt="Food Card Logo" />
      </div>

      <nav className="navItem">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li>
            <button
              className="login-btn"
              onClick={handleLogin}
            >
              {logInLogOut}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
