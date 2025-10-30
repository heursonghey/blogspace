import React from "react";
import { useNavigate } from "react-router-dom";

export default function Categories({ categories,getCategory }) {
 

  return (
    <div>
        
      <button 
      onClick={getCategory}
      className="p-4 overflow-hidden  md:shadow-lg shadow-blue-200 animate-bounce w-40 lg:w-50 sm:w-50 md:w-40  transition transform hover:scale-105 hover:shadow-xl hover:bg-gray-200  font-bold mx-1 my-1 border border-gray-400 rounded-2xl text-green-900  ">
        {categories}
      </button>
    </div>
  );
}
