import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    // <div className="footer bg-dark text-light p-3">
    <div className="footer p-3">
      <h4 className=" text-center" style={{ color: '#93b1a6' }}>
        Copyright 2024 &copy; DP Liyanagama. All Rights Reserved.
      </h4>
      <p className="text-center mt-3">
        <Link to="/about">About</Link>|<Link to="/contact">Contact</Link>|
        <Link to="/policy">Privacy Policy</Link>
      </p>
    </div>
  );
};

export default Footer;
