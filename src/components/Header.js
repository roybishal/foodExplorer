import Logo from "../assets/img/foodExplorer.png";
import { NavLink } from "react-router-dom";
// import useOnline from "../utils/useOnline";
import { useState } from "react";
import { useSelector } from "react-redux";
import { BsFillCartFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

const Title = () => {
  return (
    <NavLink to="/">
      <img className="lg:h-16 h-14" alt="logo" src={Logo} />
    </NavLink>
  );
};

const Header = () => {
  const [login, Setlogin] = useState("Login");

  const cartItems = useSelector((store) => store.cart.items);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const navmenu = [
    {
      link: "/",
      name: "Home",
    },
    {
      link:"/about",
      name: "About",
    },
    {
      link: "/contact",
      name: "Contact",
    }
  ]

  return (
    <nav className="flex items-center justify-between h-16 lg:px-[70px] md:h-20 px-5 bg-emerald-100">
      <Title />

      {/* Mobile Menu */}
      <div className="md:hidden">
      {
          isMenuOpen === true ? 
          <IoMdClose
            className="text-3xl cursor-pointer"
            onClick={toggleMenu}
          /> :
          < GiHamburgerMenu
            className="text-2xl cursor-pointer"
            onClick={toggleMenu}
          /> 
        }
        {isMenuOpen && (
          <ul className="absolute h-80 top-16 left-0 right-0 flex flex-col justify-evenly items-center bg-white shadow-md pb-5 z-20 ">
            {navmenu.map((menu) => {
              return (
                <li key={menu.name}>
                  <NavLink
                    to={menu.link}
                    activeclassname="text-green-700"
                    className="text-xl font-medium p-2"
                    onClick={toggleMenu}
                  >
                    {menu.name}
                  </NavLink>
                </li>
              );
            })}
             <li>
              <NavLink
                to="/cart"
                className="px-6 text-medium font-semibold flex items-center text-gray-600 hover:text-orange-600 "
                onClick={toggleMenu}
              >
                <BsFillCartFill style={{ fontSize: "1.5rem", marginRight: "8px" }} />
                {/* <div className="absolute text-white text-xs inset-0 flex justify-center items-center font-bold">
                  {cartItemsCount}
                </div> */}cart
                <div className="ml-2.5 mb-1  text-xs text-white absolute font-semibold  ">
                {cartItems.length === 0 ? "" : cartItems.length}
              </div>
              </NavLink>
            </li>
            <li>
            <button
            className="bg-green-500  hover:bg-green-700 text-white font-bold py-1 px-3 rounded-xl"
            onClick={() => {
              login == "Login" ? Setlogin("Logout") : Setlogin("Login");
              toggleMenu

            }}
          >
            {login}
          </button>
            </li>
          </ul>
        )}


      </div>

      
        <ul className="hidden md:flex space-x-12 menu">
          <NavLink to="/">
            <li className="px-2">Home</li>
          </NavLink>
          <NavLink to="/about">
            <li className="px-2">About Us</li>
          </NavLink>

          <NavLink to="/contact">
            <li className="">Contact Us</li>
          </NavLink>

          {/* cart  */}

          

          <NavLink to="/cart">
            <li className="px-6 text-medium font-semibold flex items-center text-gray-600 hover:text-orange-600 ">
              <BsFillCartFill
                style={{ fontSize: "1.5rem", marginRight: "8px" }}
              />
              Cart
              <div className="ml-2.5 mb-1  text-xs text-white absolute font-semibold  ">
                {cartItems.length === 0 ? "" : cartItems.length}
              </div>
            </li>
          </NavLink>

          <button
            className="bg-green-500  hover:bg-green-700 text-white font-bold py-1 px-3 rounded-xl       "
            data-testid="login-btn"
            onClick={() => {
              login == "Login" ? Setlogin("Logout") : Setlogin("Login");
            }}
          >
            {login}
          </button>
        </ul>
      
    </nav>
  );
};

export default Header;
