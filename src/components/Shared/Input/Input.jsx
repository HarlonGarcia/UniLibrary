import React from 'react';
import './Input.scss'

const Input = ({type, placeholder, id, label}) => {
  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
      </label>
      <input type={type} id={id} placeholder={placeholder}></input>
    </div>
  )
}

export default Input;