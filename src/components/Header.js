import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "url:../../public/FoodCardLogo.png";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [logInLogOut, setLogInLogOut] = useState("Login");

  const handleLogin = () => {
    setLogInLogOut((prev) =>
      prev === "Login" ? "Logout" : "Login"
    );
  };

  const onlineStatus = useOnlineStatus();

  return (
    <header className="flex flex-wrap items-center justify-between
      gap-4 bg-white px-5 py-3 shadow-md lg:px-12">

      {/* Logo */}
      <div>
        <img
          className="h-16 w-16 object-contain lg:h-20 lg:w-20"
          src={logo}
          alt="Food Card Logo"
        />
      </div>

      {/* Navigation */}
      <nav>
        <ul className="flex flex-wrap items-center gap-5
          text-sm font-semibold text-ink lg:gap-8 lg:text-base">

          <li className="flex items-center gap-2">
            Online Status:
            <span
              role="status"
              aria-label={onlineStatus ? "Online" : "Offline"}
              className={`h-3 w-3 rounded-full ${
                onlineStatus ? "bg-success" : "bg-error"
              }`}
            />
          </li>

          <li className="transition-colors hover:text-primary">
            <Link to="/">Home</Link>
          </li>

          <li className="transition-colors hover:text-primary">
            <Link to="/about">About Us</Link>
          </li>

          <li className="transition-colors hover:text-primary">
            <Link to="/contact">Contact Us</Link>
          </li>

          <li className="transition-colors hover:text-primary">
            <Link to="/grocery">Grocery</Link>
          </li>

          <li className="cursor-pointer transition-colors
            hover:text-primary">
            Cart
          </li>

          <li>
            <button
              className="rounded-lg bg-primary px-6 py-3
                font-semibold text-white transition-colors
                hover:bg-primary-hover active:scale-95
                focus-visible:outline-2
                focus-visible:outline-offset-2
                focus-visible:outline-primary"
              onClick={handleLogin}
            >
              {logInLogOut}
            </button>
          </li>

        </ul>
      </nav>
    </header>
  );
};

export default Header;