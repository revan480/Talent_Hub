import React from 'react';

function Footer() {
  return (
    <footer className="bg-secondary text-white py-4 text-center">
      <p>Copyright © {new Date().getFullYear()} Your Site Name</p>
    </footer>
  );
}

export default Footer;
