import { useState } from "react";
import { AiTwotoneLike } from "react-icons/ai";

export default function EventCard() {
  const [liked, setLiked] = useState(false);
  const [count ,setCount] = useState (0);

  const handleDoubleClick = () => {
    if(liked){
        setLiked(false);
        setCount((prev) => prev -1);

    }else{
        setLiked(true);
        setCount((prev) => prev +1);
    }
    console.log(count)
    
  };

  return (
    <div
      onClick={handleDoubleClick}
      className="relative w-64 h-40 ml-64 mt-30  bg-gray-100 rounded-2xl overflow-hidden cursor-pointer group shadow-md"
    >
      <img
        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e"
        alt="Event"
        className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
      />

      {liked && (
        <AiTwotoneLike
          className="absolute inset-0 m-auto text-red-500 w-16 h-16 animate-ping"
          fill="currentColor"
        />
      )}

      <div className="absolute bottom-0 w-full bg-white/70 backdrop-blur-sm p-3 flex justify-between items-center">
        <h3 className="font-semibold text-gray-800">Beach Festival</h3>
        <AiTwotoneLike
          className={`w-6 h-6 transition-colors ${
            liked ? "text-red-500 fill-red-500" : "text-gray-400"
          }`}
        />
        <span>{count}</span>
      </div>
    </div>
  );
}
