import React from 'react'
import './Button.scss';


function Button({title, className, onClick }) {
  return (
    <button onClick={onClick}  className={`button ${className}`}>
      {title}
    </button>
  )
}
export default Button;
