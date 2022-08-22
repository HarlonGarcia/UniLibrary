import React, { useState } from "react";
import style from "./Input.module.scss";
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
    <div style={fieldstyle} className={style.field}>
      <label htmlFor={id}>{label}</label>
      <div className={style.hide__input}>
        {(id === 'password' || id === 'authorization') && <span onClick={handleClick} 
        className={style.hide}>
          {hide ? <GoEyeClosed/> : <GoEye />}</span>}
        
        <input 
          className={style.form__input}
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
      {error && <p className={style.message__error}>{error}</p>}
    </div>
  );
};

export default Input;
