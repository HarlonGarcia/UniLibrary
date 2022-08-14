import React from 'react';
import './Input.scss'

const Input = ({type, placeholder, id, label, inputstyle, fieldstyle}) => {
  return (
    <div style={fieldstyle} className="field">
      <label htmlFor={id}>
        {label}
      </label>
      <input style={inputstyle} type={type} id={id} placeholder={placeholder}></input>
    </div>
  )
}

export default Input;