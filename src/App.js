import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Cart from "./components/Cart";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/Restaurantmenu";
import { Provider } from "react-redux";

import store from "./utils/store";


const Applayout = () => {
    return(
        <Provider store= {store}>
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
        </Provider>
    )
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <Applayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />
            },
            {
                path: "/about",
                element: <About />
            },
            {
                path: "/contact",
                element: <Contact />
            },
            {
                path: "/cart",
                element: <Cart />
            },
            
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenu />
            }


        ],
        errorElement: <Error />
    },
    
])


const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
