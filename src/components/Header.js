import Logo from "../assets/img/foodExplorer.png";
import { Link } from "react-router-dom";
// import useOnline from "../utils/useOnline";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BsFillCartFill } from "react-icons/bs";


const Title = () => {
  return (
    <Link to="/">
      <img className="h-28 p-2" alt="logo" src={Logo} />
    </Link>
  );
};

const Header = () => {
  const [login, Setlogin] = useState("Login");

  const cartItems= useSelector((store) => store.cart.items);



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

          {/* <li className="  hover:text-red-400 " data-testid="cart-item">
            <Link to="/cart">
              <span>cart: {cartItem.length}</span>{" "}
            </Link>
          </li> */}

<Link to="/cart">
            <li className="px-6 text-medium font-semibold flex items-center text-gray-600 hover:text-orange-600 ">
              <BsFillCartFill
                style={{ fontSize: "1.5rem", marginRight: "8px" }}
              />
              Cart
              <div className="ml-2.5 mb-1  text-xs text-white absolute font-semibold  ">
                {cartItems.length === 0 ? "" : cartItems.length}
              </div>
            </li>
          </Link>

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
