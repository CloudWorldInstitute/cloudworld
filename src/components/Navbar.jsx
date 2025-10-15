import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu

  return (
    <nav  
      className="bg-white/5   backdrop-blur-md rounded-xl text-white fixed top-5 left-15 right-15 m-0 z-20 border-b border-gray-500 shadow-2xl rounded-2xl transition-all duration-300"
    >
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-2">
        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3 hover:opacity-90 transition-all duration-300 group"
        >
          <div className="relative">
            <img
              src="/logo.png" // ✅ Make sure this file is in the public folder
              alt="CloudWorld Logo"
              className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 object-cover rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300"
            />
            {/* Optional hover ring effect */}
            <span className="absolute inset-0 rounded-full ring-2 ring-teal-500 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></span>
          </div>

          <span className="self-center text-lg sm:text-xl md:text-2xl font-extrabold text-white tracking-wide">
            Cloud<span className="text-teal-900">World</span>
          </span>
        </NavLink>


        {/* Buttons and Mobile Toggle */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">




          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-gray-300 rounded-lg md:hidden hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
            onClick={() => setIsOpen(!isOpen)} // Toggle menu state
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
        </div>

        {/* Navigation Links */}
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isOpen ? "block" : "hidden"
            }`} // Toggle visibility based on state
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-8 md:p-0 mt-10 font-medium border border-gray-700 rounded-lg bg-gray-800 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 ${isActive
                    ? "text-gray-900 bg-teal-800 md:bg-transparent"
                    : "text-gray-300 hover:text-white hover:bg-teal-600 transition-all rounded"
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 ${isActive
                    ? "text-gray-900 bg-teal-800 md:bg-transparent"
                    : "text-gray-300 hover:text-white hover:bg-teal-600 transition-all rounded"
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/success-stories"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 ${isActive
                    ? "text-gray-900 bg-teal-800 md:bg-transparent"
                    : "text-gray-300 hover:text-white hover:bg-teal-600 transition-all rounded"
                  }`
                }
              >
                Success Stories
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `block py-2 px-3 rounded md:p-0 ${isActive
                    ? "text-gray-900 bg-teal-800 md:bg-transparent"
                    : "text-gray-300 hover:text-white hover:bg-teal-600 transition-all rounded"
                  }`
                }
              >
                Contact
              </NavLink>
            </li>


           

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
