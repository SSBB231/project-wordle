import React from 'react';

function Button({ variant = 'primary', children, onClick }) {
  return (
    <button className={`button ${variant}`} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
