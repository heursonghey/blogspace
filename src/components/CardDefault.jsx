import React from "react";
import { GiWrappingStar } from "react-icons/gi";
import { NavLink } from "react-router";

export default function CardDefault() {
  return (
    <div>
      <div className="mt-40    ">
        <div className=" ml-20 animate-bounce overflow-hidden transition  md:ml-80  sm:ml-50  lg:ml-90 transform hover:scale-105 hover:shadow-xl w-60 m-5  rounded-2xl bg-purple-100 px-3 flex ">
          <GiWrappingStar className="text-amber-300 m-2" />

          <h5 className="text-green-950 font-medium ">welcome to blogspace</h5>
        </div>
        <div className=" bg-purple-100 ml-10 w-90   md:shadow-2xl md:shadow-blue-200 overflow-hidden   md:ml-60   sm:ml-50 lg:w-210   sm:w-120  md:w-160 lg:ml-100   transition transform hover:scale-105 hover:shadow-xl rounded-2xl  h-120   ">
          <div className="text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-3xl font-bold pt-5 px-10">
            <h1 className="text-green-900 ">Share Your Stories,</h1>
            <h1 className="text-green-950">Inspire the World </h1>
          </div>
          <div className="  ">
            <div className="lg:flex md:flex sm:flex  px-10 ">
              <small className="font-medium  lg:line-clamp-none md:line-clamp-none sm:line-clamp-none py-10 line-clamp-3 text-sm  lg:text-lg md:text-lg sm:text-sm text-gray-600">
                join thousands of writers and readers in community where every
                story matters. Discover amazing content, share your thoughts,
                and connect with like-minded people.
              </small>
              <img
                className="lg:h-50 p-3 lg:md:w-100 md:h-50 lg:w-50 md:w-70 sm:w-60 sm:h-50  rounded-2xl object-cover mask-b-from-40% mask-b-to-100% bg-[url(/img/mountains.jpg)]"
                src="https://thumbs.dreamstime.com/b/wildflowers-blooming-sunset-nature-scenery-wildflowers-blooming-sunset-nature-scenery-388164189.jpg"
                alt="picture"
              />
            </div>
            <NavLink
              to="/write"
              className="animate-pulse  overflow-hidden transition  transform hover:scale-105 hover:shadow-xl inline-flex lg:w-35 md:w-35 sm:w-35 w-35 items-center ml-10 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              start writing
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5  ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </NavLink>
          </div>
        </div>
      </div>
      <div className=" w-60 md:ml-70 lg:ml-70 sm:ml-50 my-10 rounded-2xl ml-20 bg-purple-100 px-3 flex ">
        <GiWrappingStar className="text-amber-300 m-2" />

        <h5
          className="text-green-950 text-base font-medium  pt-1"
        >
          Trending Topics
        </h5>
      </div>
    </div>
  );
}
