import React from 'react';
import BlogItem from './BlogItem';

const BlogList = ({ blogs, removeBlog }) => {
  return (
    <div className="mt-4">
      {blogs.map(blog => (
        <BlogItem key={blog.id} blog={blog} removeBlog={removeBlog} />
      ))}
    </div>
  );
}

export default BlogList;
