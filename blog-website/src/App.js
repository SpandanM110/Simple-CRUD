import React, { useState } from 'react';
import Header from './components/Header';
import BlogList from './components/BlogList';
import BlogForm from './components/BlogForm';

function App() {
  const [blogs, setBlogs] = useState([]);
  
  const addBlog = (blog) => {
    setBlogs([...blogs, blog]);
  };

  const removeBlog = (id) => {
    setBlogs(blogs.filter(blog => blog.id !== id));
  };

  return (
    <div className="bg-gray-100">
      <Header />
      <div className="max-w-4xl mx-auto p-4">
        <BlogForm addBlog={addBlog} />
        <BlogList blogs={blogs} removeBlog={removeBlog} />
      </div>
    </div>
  );
}

export default App;
