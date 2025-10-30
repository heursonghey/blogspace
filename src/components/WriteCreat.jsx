import { useState, useEffect } from "react";

export default function WriteCreate() {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [content, setContent] = useState("");
  const [categories, setCategories] = useState("");
  const [isPending, setIsPending] = useState(false);
  const [posts, setPosts] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Load saved posts on first render
  useEffect(() => {
    const savedPosts = localStorage.getItem("userPosts");
    if (savedPosts) {
      setPosts(JSON.parse(savedPosts));
    }
  }, []);

  // Add or update a post
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content || !thumbnail || !categories) {
      alert("Please fill all required fields");
      return;
    }

    setIsPending(true);
    await new Promise((res) => setTimeout(res, 300));

    if (editingId) {
      // Update existing post
      const updatedPosts = posts.map((post) =>
        post.id === editingId
          ? { ...post, title, thumbnail, content, categories }
          : post
      );
      setPosts(updatedPosts);
      localStorage.setItem("userPosts", JSON.stringify(updatedPosts)); // SAVE IMMEDIATELY
      setEditingId(null);
    } else {
      // Add new post
      const newPost = {
        id: Date.now() + Math.random(),
        title,
        thumbnail,
        content,
        categories,
        createdAt: new Date().toLocaleString(),
      };
      const updatedPosts = [newPost, ...posts];
      setPosts(updatedPosts);
      localStorage.setItem("userPosts", JSON.stringify(updatedPosts)); // SAVE IMMEDIATELY
    }

    // Reset form
    setTitle("");
    setThumbnail("");
    setContent("");
    setCategories("");
    setIsPending(false);
  };

  // Delete a post
  const handleDelete = (id) => {
    const updatedPosts = posts.filter((p) => p.id !== id);
    setPosts(updatedPosts);
    localStorage.setItem("userPosts", JSON.stringify(updatedPosts)); // SAVE IMMEDIATELY
    if (editingId === id) {
      setTitle("");
      setThumbnail("");
      setContent("");
      setCategories("");
      setEditingId(null);
    }
  };

  // Load post into form for editing
  const handleEdit = (post) => {
    setTitle(post.title);
    setThumbnail(post.thumbnail);
    setContent(post.content);
    setCategories(post.categories);
    setEditingId(post.id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen lg:ml-70   md:ml-50 sm:ml-50 mt-30  ml-2 dark:bg-gray-900 py-10 px-4">
      {/* Form */}
      <div className="max-w-xl mx-auto  bg-white w-90 lg:w-200 lg:ml-80  md:w-150  sm:w-120 dark:bg-gray-800 p-6 rounded-lg  md:shadow-2xl md:shadow-blue-200 ">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2">
          {editingId ? "Edit Article" : "Create New Article"}
        </h2>
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          {editingId
            ? "Update your article and save changes"
            : "Share your thoughts and stories with the community"}
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white"
              placeholder="Enter an engaging title"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Thumbnail URL
            </label>
            <input
              type="text"
              value={thumbnail}
              onChange={(e) => setThumbnail(e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white"
              placeholder="https://example.com/image.jpg"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Content
            </label>
            <textarea
              rows="5"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white"
              placeholder="Write your article here..."
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Category
            </label>
            <select
              value={categories}
              onChange={(e) => setCategories(e.target.value)}
              className="w-full p-2.5 border border-gray-300 rounded-lg bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white"
              required
            >
              <option value="">Select Category</option>
              <option value="Programming">Programming</option>
              <option value="Business">Business</option>
              <option value="Travel">Travel</option>
              <option value="Health">Health</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </div>

          <button
            type="submit"
            disabled={isPending}
            className={`w-full py-2.5 text-white font-medium rounded-lg transition ${
              isPending ? "bg-blue-400" : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isPending
              ? editingId
                ? "Saving..."
                : "Adding..."
              : editingId
              ? "Save Changes"
              : "Add Blog"}
          </button>
        </form>
      </div>

      {/* Display posts */}
      {posts.length > 0 && (
        <div className=" ml-10 mt-10 grid md:w-180 sm:w-100  w-80 grid-cols-1 lg:w-300 sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white  md:shadow-2xl md:shadow-blue-200 dark:bg-gray-800 rounded-lg shadow overflow-hidden flex flex-col"
            >
              {post.thumbnail ? (
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
              ) : (
                <div className="w-full h-48 bg-gray-100 flex items-center justify-center text-gray-400">
                  No Image
                </div>
              )}
              <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold mb-1">{post.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow line-clamp-3">
                  {post.content}
                </p>
                <div className="mt-2 flex justify-between items-center">
                  <div className="text-xs text-gray-400">
                    {post.categories} • {post.createdAt}
                  </div>
                  <div className="flex gap-2">
                    <button
                      className="text-blue-500 text-xs hover:underline"
                      onClick={() => handleEdit(post)}
                    >
                      Edit
                    </button>
                    <button
                      className="text-red-500 text-xs hover:underline"
                      onClick={() => handleDelete(post.id)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}
