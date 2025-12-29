import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  const toggleNav = () => {
    setOpenNav(!openNav);
  };
  return (
    <nav className="bg-linear-to-r from-lime-400 to-lime-500 border-gray-300 dark:bg-gray-900">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          <span className="self-center text-2xl whitespace-nowrap text-gray-900 font-extrabold font-stretch-semi-condensed">
            👩‍🍳 Recipe App
          </span>
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          onClick={toggleNav}
          className="inline-flex items-center border-none p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
          aria-controls="navbar-default"
          aria-expanded="false">
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            fill="none"
            viewBox="0 0 24 24">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth={2}
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>

        <div
          className="items-center justify-between  w-full md:flex md:w-auto"
          id="navbar-search">
          <ul
            className={`flex sm:${
              openNav ? "flex-col" : "hidden"
            }   p-4 md:p-0 mt-4 font-bold font-stretch-90% text-lg border border-gray-100 rounded-lg bg-transparent md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700`}>
            <li>
              <Link
                to="/"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/favorites"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Favorites
              </Link>
            </li>
            <li>
              <Link
                to="/categories"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">
                Categories
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
