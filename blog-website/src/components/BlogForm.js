import React, { useState } from 'react';

const BlogForm = ({ addBlog }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newBlog = {
      id: Date.now(),
      title,
      author,
      content,
    };

    addBlog(newBlog);

    setTitle('');
    setAuthor('');
    setContent('');
  };

  return (
    <div className="bg-white p-4 shadow-md rounded-md">
      <h2 className="text-xl font-semibold">Add a New Blog</h2>
      <form className="mt-2" onSubmit={handleSubmit}>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Title"
            className="w-full p-2 rounded border"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <input
            type="text"
            placeholder="Author"
            className="w-full p-2 rounded border"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <div className="mb-2">
          <textarea
            placeholder="Content"
            className="w-full p-2 rounded border"
            rows="4"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Add Blog
        </button>
      </form>
    </div>
  );
}

export default BlogForm;
