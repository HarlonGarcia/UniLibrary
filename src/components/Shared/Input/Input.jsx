import React from 'react';
import './Input.scss'

const Input = ({placeholder, id, label}) => {
  return (
    <div className="input">
      <label htmlFor={id}>
        {label}
      </label>
      <input id={id} placeholder={placeholder}></input>
    </div>
  )
}

export default Input;