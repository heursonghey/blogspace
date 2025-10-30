import React from 'react';
import { AiTwotoneLike } from 'react-icons/ai';
import { IoBookmarkOutline } from 'react-icons/io5';

function BlogCard({ post, onLike, onBookmark }) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-2xl flex flex-col">
      <img 
        className="w-full h-48 object-cover" 
        src={post.imageUrl} 
        alt={post.title} 
        onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/cccccc/ffffff?text=Image+Error'; }}
      />
      <div className="p-6 flex flex-col flex-grow">
        <span className="text-indigo-500 text-xs font-semibold uppercase tracking-wide">{post.category}</span>
        <h3 className="font-bold text-xl my-2 text-gray-800">{post.title}</h3>
        <p className="text-gray-600 text-base flex-grow">{post.content}</p>
        <div className="mt-6 flex justify-end items-center gap-4">
          <button onClick={() => onLike(post.id)} className="p-2 rounded-full transition-colors duration-300 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-red-300">
            <AiTwotoneLike  />
          </button>
          <button onClick={() => onBookmark(post.id)} className="p-2 rounded-full transition-colors duration-300 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-300">
            <IoBookmarkOutline  />
          </button>
        </div>
      </div>
    </div>
  );
}