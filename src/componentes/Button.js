import React from 'react';
import './Button.css';


const Button = (props) => {
  return (
    <div>
        <button className='Button'>{props.text}</button>
    </div>
  );
};

export default Button;
