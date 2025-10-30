import React, { useEffect, useState } from "react";

import { PiNotePencilBold } from "react-icons/pi";
import { PiBellRinging } from "react-icons/pi";
import { FaRegCircleUser } from "react-icons/fa6";
import { NavLink } from "react-router";

export default function Navbar() {
  // const { products, status, error } = useSelector((state) => state.products);
  // const dispatch = useDispatch();
  // const [title, setTitle] = useState("");

  // useEffect(() => {
  //   dispatch(searchProducts());
  //   console.log('global state',status);
  //   console.log('global state',products);
  // },[])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-blue-50 border-gray-200 dark:bg-gray-900 shadow">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <button className="text-white text-xl h-10 w-10 p-[5px] bg-first border rounded-lg">
            B
          </button>
          <span className="text-2xl font-semibold text-first dark:text-white">
            Blog Space
          </span>
        </NavLink>

        {/* Hamburger button */}
        <button
          data-collapse-toggle="navbar-menu"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-green-900   rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-300 dark:focus:ring-gray-600"
          aria-controls="navbar-menu"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Collapsible menu */}
        <div
          className="hidden ml-10  w-full md:block md:w-auto transition-all duration-300 ease-in-out"
          id="navbar-menu"
        >
          <ul className="flex flex-col mt-4 font-medium border border-gray-100 rounded-lg bg-blue-100  md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent">
            <li>
              <NavLink
                to="/"
                className="block py-2 px-3 text-green-950 rounded md:p-0 md:text-green-950 hover:bg-gray-300 md:hover:bg-transparent"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className="block py-2 px-3 text-green-950 rounded md:p-0 md:text-green-950 hover:bg-gray-300 md:hover:bg-transparent"
              >
                Register
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/login"
                className="block py-2 px-3 text-green-950 rounded md:p-0 md:text-green-950 hover:bg-gray-300 md:hover:bg-transparent"
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
