import React from 'react';

const BlogItem = ({ blog, removeBlog }) => {
  return (
    <div className="bg-white p-4 shadow-md rounded-md mb-4">
      <h2 className="text-xl font-semibold">{blog.title}</h2>
      <p className="text-gray-600">{blog.author}</p>
      <p className="mt-2">{blog.content}</p>
      <button
        className="bg-red-500 text-white mt-2 p-2 rounded hover:bg-red-600"
        onClick={() => removeBlog(blog.id)}
      >
        Delete
      </button>
    </div>
  );
}

export default BlogItem;
