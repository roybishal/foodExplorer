import Logo from "../assets/img/foodExplorer.png";
import { Link } from "react-router-dom";
// import useOnline from "../utils/useOnline";
import { useState } from "react";
import { useSelector } from "react-redux";

const Title = () => {
  return (
    <Link to="/">
      <img className="h-28 p-2" alt="logo" src={Logo} />
    </Link>
  );
};

const Header = () => {
  const [login, Setlogin] = useState("Login");

  const cartItem = useSelector((store) => store.cart.items);



  return (
    <div className="flex justify-between bg-pink-100 shadow-lg">
      
        <Title />
      
      <div >
        <ul className="flex gap-7 text-xl justify-between py-10 px-11 ">
        
          <Link to="/">
            <li className="px-2">Home</li>
          </Link>
          <Link to="/about">
            <li className="px-2">About Us</li>
          </Link>

          <Link to="/contact">
            <li className="">Contact Us</li>
          </Link>

          {/* cart  */}

          <li className="  hover:text-red-400 " data-testid="cart-item">
            <Link to="/cart">
              <span>cart: {cartItem.length}</span>{" "}
            </Link>
          </li>

          <button
            className=" px-1  bg-green-500  lg:p-2  lg:px-4 rounded-md text-white "
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
