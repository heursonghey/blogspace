import React, { useEffect, useState } from "react";
import { IoHome } from "react-icons/io5";
import { FaPenToSquare } from "react-icons/fa6";
import { IoBookmarksSharp } from "react-icons/io5";
import { FaUser } from "react-icons/fa";
import { HiArrowRightEndOnRectangle } from "react-icons/hi2";
import { HiArrowDownOnSquareStack } from "react-icons/hi2";
import { RiLoginBoxFill } from "react-icons/ri";
import { FaFileSignature } from "react-icons/fa";
import { NavLink } from "react-router";

export default function Sidebar() {
  return (
    <div>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="fixed top-16 left-3 z-50 inline-flex items-center p-2 mt-2 ms-3 text-sm text-green-900 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span class="sr-only">Open sidebar</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="default-sidebar"
        class="fixed top-0 left-0 z-40 w-35 h-screen bg-white transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="  mt-12  px-3 py-2  overflow-y-auto grid-template-rows: auto 1fr auto h-100  fixed top-12 bottom-12 left-0 w-38 lg:w-64 md: dark:bg-gray-800">
          <ul className=" font-medium">
            <li>
              <NavLink
                to="/"
                className="flex items-center p-2 text-green-950 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <IoHome className="text-xl" />
                </svg>
                <span className="ms-3">Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/write"
                className="flex items-center p-2 text-green-950 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <FaPenToSquare className="text-xl" />
                </svg>
                <span className="ms-3">Writeblogs</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/bookmark"
                className="flex items-center p-2 text-green-950 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <IoBookmarksSharp className="text-xl" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Bookmark</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="/profile"
                className="flex items-center p-2 text-green-950 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <FaUser className="text-xl" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </NavLink>
            </li>

            <li>
              <NavLink
                to="Login"
                className="flex items-center p-2 text-green-950 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="shrink-0 w- h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  />
                  <RiLoginBoxFill className="text-xl " />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Sign In</span>
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className="flex items-center p-2 text-green-950 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="shrink-0 w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <FaFileSignature className="text-xl" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Sign Up</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  );
}
