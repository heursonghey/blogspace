import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// import { useLocation } from "react-router-dom";
export default function ProfilePictureUploader() {
  const Navigate = useNavigate();
  const [image, setImage] = useState(null);
  const [user, setUser] = useState({ username: "", email: "", bio: "" });
  const [createPost, setCreatePost] = useState({
    title: "",
    content: "",
    categories: [],
    thumbnail: "",
  });
  // for create post data
  

  // for prile
  useEffect(() => {
    const savedPost = JSON.parse(localStorage.getItem("newPost"));
    if (savedPost) {
      setCreatePost(savedPost);
    }
  }, []);
  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("userProfile"));
    if (savedUser) {
      setUser(savedUser);
    } else {
      Navigate("/register");
    }
  }, [Navigate]);

  useEffect(() => {
    const saveImage = localStorage.getItem("profileImage");
    if (saveImage) {
      setImage(saveImage);
    }
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setImage(imageUrl); // preview selected image
      localStorage.setItem("profileImage", imageUrl);
    }
  };

  const handleRemove = () => {
    setImage(null);
    localStorage.removeItem("profileImage");
  };
  const handleLogout = () => {
    localStorage.removeItem("userProfile");
    localStorage.removeItem("profileImage");
    Navigate("/register");
  };

  return (
    <div className="flex flex-col items-center mt-30 ml-5 w-200  md:ml-70 md:w-150 sm:ml-60  lg:ml-150 sm:w-200   bg-white rounded-2xl p-6 max-w-sm mx-auto">
      <h2 className="text-xl font-semibold mb-4 text-gray-800">
        Profile Picture
      </h2>

      <div className="relative">
        {image ? (
          <img
            src={image}
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-indigo-500"
          />
        ) : (
          <div className="w-32 h-32 rounded-full bg-gray-200 flex items-center justify-center text-gray-500">
            No Image
          </div>
        )}

        {/* Edit button overlay */}
        <label
          htmlFor="fileInput"
          className="absolute bottom-1 right-1 bg-indigo-600 text-white rounded-full p-2 cursor-pointer hover:bg-indigo-700 transition"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-4 h-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.232 5.232l3.536 3.536m-2.036-1.5a2.121 2.121 0 113-3l-9 9L9 15l1.5-3 9-9z"
            />
          </svg>
        </label>

        <input
          id="fileInput"
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleImageChange}
        />
      </div>

      {image && (
        <button
          onClick={handleRemove}
          className="mt-4 text-sm text-red-600 hover:text-red-800"
        >
          Remove
        </button>
      )}
      <div>
        <div>Personal Detail</div>
        <div>
          <p>
            <strong>Name:</strong> {user.username}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Bio:</strong> {user.bio || "No bio provided   "}
          </p>
        </div>
        <button
          onClick={handleLogout}
          className="mt-6 w-full bg-red-500 text-white py-2 rounded-lg hover:bg-red-600"
        >
          Log Out
        </button>
      </div>
    </div>
  );

  
}
