import { Card } from "flowbite-react";
import { useEffect, useState } from "react";
import { AiTwotoneLike } from "react-icons/ai";
import { IoBookmarkOutline } from "react-icons/io5";
import { NavLink } from "react-router";
import CardDefault from "./CardDefault";

export default function Component({
  id,
  thumbnail,
  content,
  author_id,
  title,
  username,
  profileUrl,
  bio,
  author,
  created_at,
  number_of_likes,
  number_of_bookmarks,
  categories,
}) {
  const [isLiked, setIsLiked] = useState(false);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [likes, setLikes] = useState(number_of_likes || 0);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookmarkedPosts")) || [];
    const isSaved = stored.some((b) => b.id === id);
    setIsBookmarked(isSaved);
  }, [id]);

  const handleLike = () => {
    if (isLiked) {
      setLikes((prev) => prev - 1);
    } else {
      setLikes((prev) => prev + 1);
    }
    setIsLiked(!isLiked);
  };
  const toggleBookmark = () => {
    const stored = JSON.parse(localStorage.getItem("bookmarkedPosts")) || [];
    const alreadyBookmarked = stored.some((b) => b.id === id);

    let updated;
    if (alreadyBookmarked) {
      updated = stored.filter((b) => b.id !== id);
      setIsBookmarked(false);
    } else {
      const newBookmark = { id, title, thumbnail, username, categories };
      updated = [...stored, newBookmark];
      setIsBookmarked(true);
    }

    localStorage.setItem("bookmarkedPosts", JSON.stringify(updated));
  };

  return (
    
      <div className="bg-white  transform hover:scale-105   pb-5 rounded-2xl shadow-md hover:shadow-2xl transition-shadow duration-300">
        
          {/* Thumbnail Image */}
        <NavLink to={`/blogs/${id}`}>
          <div>
            <img
              className="w-full  h-48 object-cover  rounded-t-2xl"
              src={thumbnail}
              alt="Article thumbnail"
            />
          </div>
        
         <div className="w-full p-4 space-y-2">
           {/* Author Section */}
          <div className="flex items-center space-x-4 mt-4">
            <img
              className="h-10 w-10 rounded-full object-cover shadow-md"
              src={profileUrl}
              alt={username}
            />
            <div>
              <div className="flex items-center space-x-1">
                <p className="font-semibold text-gray-900  dark:text-white">
                  {username}
                </p>
                <p className="text-sm  md:hidden sm:hidden text-gray-500">
                  · Posted an article
                </p>
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400">{bio}</p>
            </div>
          </div>

          {/* Content Section */}
          <div className="mt-2">
            <h5 className="text-lg font-bold text-gray-900 dark:text-white line-clamp-2">
              {title}
            </h5>
            <p className="text-gray-700 dark:text-gray-400 text-sm line-clamp-3">
              {content}
            </p>
          </div>
         </div>

        </NavLink>
        {/* category */}

        <span className="inline-block bg-blue-100 text-blue-600 px-2 mx-4 py-1 mt-2 rounded-full text-xs">
          {categories}
        </span>

        <div className="grid grid-cols-2 ml-5  ">
          {/* Like */}
          <div className="flex items-center gap-1 ">
            <AiTwotoneLike
              onClick={handleLike}
              className={`cursor-pointer  transition-colors ${
                isLiked ? "text-blue-500" : "text-gray-400"
              }`}
              size={22}
            />
            <span className="md:ml-1 ">
              {likes} {isLiked ? "Liked" : "Like"}
            </span>
          </div>

          {/* Bookmark */}
          <div className="flex items-center gap-1">
            <IoBookmarkOutline
              onClick={toggleBookmark}
              className={`cursor-pointer transition-colors ${
                isBookmarked ? "text-blue-600" : "text-gray-400"
              }`}
              size={22}
            />
            <span>{isBookmarked ? "Bookmarked" : "Bookmark"}</span>
          </div>
        </div>
        
     
      </div>
    
  );
}
