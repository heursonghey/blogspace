import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function BlogEditor() {
  const [content, setContent] = useState(""); // store the blog text
  const [title, setTitle] = useState("");

  const handleSubmit = async () => {
    const blogData = {
      title,
      content,
      category_ids: ["4065b200-6a9b-4e21-943a-1c1db3bb1617"],
      thumbnail: "thumbnail.jpg",
    };

    const response = await fetch("https://blog-api.devnerd.store/blogs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // add your token if API requires authentication
        // Authorization: `Bearer ${YOUR_TOKEN}`,
      },
      body: JSON.stringify(blogData),
    });

    const result = await response.json();
    console.log("Saved blog:", result);
  };

  return (
    <div>
      <h2>Create Blog</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <ReactQuill theme="snow" value={content} onChange={setContent} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default BlogEditor;
