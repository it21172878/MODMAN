import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <div class="btn">
      <div>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {props.children}
      </div>
    </div>
  );
};

export default Button;
