import React, { useState } from "react";
import "./Input.scss";
import { GoEyeClosed, GoEye } from 'react-icons/go'

const Input = ({
  fieldstyle,
  inputstyle,
  type,
  placeholder,
  id,
  label,
  value,
  error,
  onChange,
  onBlur,
}) => {

  const [hide, setHide] = useState(false);
  const passwordType = hide ? 'password' : 'text'

  const handleClick = () => {
    setHide(!hide)
  }

  return (
    <div style={fieldstyle} className="field">
      <label htmlFor={id}>{label}</label>
      <div className="hide__input">
        {(id === 'password' || id === 'authorization') && <span onClick={handleClick} className="hide">
          {hide ? <GoEyeClosed/> : <GoEye />}</span>}
        
        <input 
          className="form__input"
          style={inputstyle}
          name={id}
          type={(id === 'password' || id === 'authorization') ? passwordType : type}
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        ></input>
      </div>
      {error && <p className='message__error'>{error}</p>}
    </div>
  );
};

export default Input;
