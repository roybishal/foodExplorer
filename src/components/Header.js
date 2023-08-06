import Logo from "../assets/img/foodExplorer.png";
import { Link } from "react-router-dom";
// import useOnline from "../utils/useOnline";
 import { useState } from "react";

const Title = () => {
  return (
    <a href="/">
      <img className="h-28 p-2" alt="logo" src={Logo} />
    </a>
  );
};

const Header = () => {
    const [login, Setlogin] = useState("Login")


  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const isOnline=useOnline();

  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      <Title />
      <div className="nav-items">
        <ul className="flex justify-between py-10 px-11 ">
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About Us</li>
          </Link>

          <Link to="/contact">
            <li className="">Contact Us</li>
          </Link>
          <li className="px-2">Cart</li>

          <button
            className=" px-2  bg-green-500  lg:p-2  lg:px-4 rounded-md text-white "
            data-testid="login-btn"
            onClick={() => {
              login == "Login" ? Setlogin("Logout") : Setlogin("Login");
            }}
          >
            {login}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
