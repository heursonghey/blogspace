import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import ProfilePictureUploader from "./Profile"
export default function Register({ loginSuccess, onNavigate }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const[bio,setBio]=useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [error, setError] = useState("");
  const Navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    // stop form from reloading

    // Validation
    if (!email || !password || !username) {
      setError("Please enter both email and password.");
      return;
    }
    const userData={username,email,bio};
    localStorage.setItem("userProfile",JSON.stringify(userData));
    // console.log("Attempting to log in with:", { email, password });
    // setError("");
    // setIsLoggedIn(true);
    Navigate("/profile")
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setEmail("");
    setPassword("");
    
  };

  
  return (
    <div>
      <div className=" lg:ml-150 mt-30 lg:mt-30 md:mt-30 sm:mt-30  ml-5 w-100  md:ml-60 md:w-120 sm:ml-10 sm:w-200   dark:bg-gray-900">
        <div className="flex flex-col items-center  justify-center  mx-auto  ">
         
            <div className="flex items-center  gap-4 space-x-3 rtl:space-x-reverse  ">
              <button className=" text-white text-2xl h-10 p-[5px] m-0 bg-first min-w-10 border rounded-lg">
                B
              </button>
              <span className="self-center text-2xl font-semibold text-first whitespace-nowrap dark:text-white">
                Blog Space
              </span>
            </div>
          
          <div className="w-full bg-white rounded-lg   dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 lg:space-y-5  sm:p-8 ">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Creat an account 
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit}
                action="#"
                noValidate
              >
                {error && (
                  <p className="bg-red-100 text-red-700 p-3 rounded-lg text-center mb-4 text-sm">
                    {error}
                  </p>
                )}

                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your name
                  </label>
                  <input
                    type="username"
                    name="username"
                    value={username}
                    onChange={e =>setUsername(e.target.value)}
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="choose a username"
                    required=""
                  />
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    // onChange={(e)=> setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    bio(Optional)
                  </label>
                  <input
                    type="bio"
                    name="bio"
                    id="bio"
                    value={bio}
                    onChange={(e) => setBio(e.target.value)}
                    className="bg-gray-50 border h-25 border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full px-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="tell us a bit about yourself"
                    required=""
                  />
                
                <button
                  type="submit"
                  className="w-full text-white bg-blue-600 bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                >
                  Creat an account 
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <NavLink
                    to="/login"
                    // onClick={() => onNavigate("register")}
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign in
                  </NavLink>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
