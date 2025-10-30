import { useEffect, useState } from "react";
import { Card } from "flowbite-react";
import { NavLink } from "react-router";

export default function BookmarkPage() {
  const [bookmarks, setBookmarks] = useState([]);

  // Load bookmarks from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("bookmarkedPosts")) || [];
    setBookmarks(stored);
  }, []);

  return (
    <div className="min-h-screen p-6 ">
      <h1 className="text-2xl font-bold mb-4">Your Bookmarked Articles</h1>

      {bookmarks.length === 0 ? (
        <p className="text-gray-600  lg:ml-160 md:ml-70 sm:ml-60 ml-10 mt-30 ">
          You haven’t bookmarked any articles yet.
        </p>
      ) : (
        <div className="ml-5  md:grid-cols-2 lg:ml-60  md:w-200 lg:w-300 sm:w-200 sm:ml-120 md:ml-40 mt-20 grid grid-cols-1 w-90 sm:grid-cols-3  lg:grid-cols-3 gap-4">
          {bookmarks.map((post) => (
            <div key={post.id} className="max-w-sm shadow-md">
              <NavLink to={`/blogs/${post.id}`}>
                <img
                  className="w-full h-40 object-cover rounded-t-lg"
                  src={post.thumbnail}
                  alt={post.title}
                />
                <h2 className="text-lg font-semibold mt-2">{post.title}</h2>
                <p className="text-sm text-gray-500">{post.username}</p>
                <span className="inline-block bg-blue-100 text-blue-600 px-2 py-1 mt-2 rounded-full text-xs">
                  {post.categories}
                </span>
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
