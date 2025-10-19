import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { GiTabletopPlayers } from "react-icons/gi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation items data
  const navItems = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/success-stories", label: "Success Stories" },
    { path: "/contact", label: "Contact" },
    { path: "/blog", label: "Blog" }
  ];

  return (
    <nav className="fixed top-5 inset-x-4 bg-indigo/20 backdrop-blur-md text-white z-50 border-b border-gray-900 shadow-[inset_0px_0px_17px_0px_#615fff] rounded-xl transition-all duration-300 mx-10">
      <div className="max-w-screen-xl mx-auto flex flex-wrap items-center justify-between p-2">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-3 group hover:opacity-90 transition-all duration-300"
        >
          <div className="relative">
            <img
              src="/logo.png"
              alt="CloudWorld Logo"
              className="h-10 w-10 md:h-12 md:w-12 object-cover rounded-full shadow-md group-hover:shadow-lg transition-shadow duration-300"
            />
            <span className="absolute inset-0 rounded-full ring-2 ring-teal-500 opacity-0 group-hover:opacity-80 transition-opacity duration-300"></span>
          </div>
          <span className="self-center text-xl md:text-2xl font-extrabold tracking-wide text-gray-950">
            Cloud<span className="text-indigo-600">World</span>
          </span>
        </NavLink>

        {/* Desktop Navigation - Always visible on medium screens and up */}
        <div className="hidden md:flex  rounded-2xl items-center space-x-8">
          <div className=" bg-gray-800 rounded-2xl items-center p-3 space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `relative px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${isActive
                    ? "text-white bg-violet-600 shadow-lg"
                    : "text-indigo-500 hover:text-white hover:bg-teal-500/30"
                  }`
                }
              >
                {item.label}
                {/* Active indicator line */}
                {({ isActive }) => isActive && (
                  <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-teal-400 rounded-full"></span>
                )}
              </NavLink>
            ))}
          </div>

          {/* Additional CTA Button for Desktop */}


          <button className="p-[3px] relative ">
            <div className="absolute  inset-0 bg-gradient-to-r from-lime-500 to-teal-500 rounded-2xl" />
            <div className="p-2   flex items-center  bg-gray-800 rounded-2xl  relative group transition duration-200 text-lime-300 font-bold hover:bg-transparent">
              <GiTabletopPlayers /> Get career guidance
            </div>
          </button>
        </div>

        {/* Mobile toggle button - Hidden on desktop */}
        <button
          type="button"
          aria-controls="navbar-sticky"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
          className="inline-flex items-center justify-center p-2 w-10 h-10 text-indigo-500 rounded-lg md:hidden hover:bg-gray-700/50 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-300"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>

        {/* Mobile Navigation Menu - Only shows on mobile */}
        <div
          id="navbar-sticky"
          className={`w-full md:hidden transition-all duration-500 ease-in-out ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            } overflow-hidden`}
        >
          <ul className="flex flex-col mt-3 font-medium bg-gray-800/95 backdrop-blur-md rounded-lg p-2 border border-gray-700 space-y-3">
            {navItems.map((item) => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block py-3 px-4 rounded-lg transition-all duration-300 ${isActive
                      ? "bg-teal-600 text-white font-bold shadow-md"
                      : "text-teal-300 hover:text-white hover:bg-teal-500/30"
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}

            {/* Mobile CTA Button */}
            <li className="pt-2">
              <button className="p-[3px] relative ">
            <div className="absolute  inset-0 bg-gradient-to-r from-lime-500 to-teal-500 rounded-2xl" />
            <div className="p-2   flex items-center  bg-gray-800 rounded-2xl  relative group transition duration-200 text-lime-300 font-bold hover:bg-transparent">
              <GiTabletopPlayers /> Get career guidance
            </div>
          </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;