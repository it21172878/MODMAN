import React from 'react';
import './Button.css';

const Button = ({ children, onClick }) => {
  return (
    <div class="btn">
      <button type="submit" className="submit" onClick={onClick}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {children}
      </button>
    </div>
  );
};

export default Button;
