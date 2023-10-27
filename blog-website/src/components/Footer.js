import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-blue-500 p-4 text-white text-center">
      <p>&copy; {new Date().getFullYear()} My Blog. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
