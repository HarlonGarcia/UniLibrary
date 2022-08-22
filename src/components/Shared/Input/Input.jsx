import React, { useState } from "react";
import styles from "./Input.module.scss";
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
    <div style={fieldstyle} className={styles.field}>
      <label htmlFor={id}>{label}</label>
      <div className={styles.hide__input}>
        {(id === 'password' || id === 'authorization') && <span onClick={handleClick} 
        className={styles.hide}>
          {hide ? <GoEyeClosed/> : <GoEye />}</span>}
        
        <input 
          className={styles.form__input}
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
      {error && <p className={styles.message__error}>{error}</p>}
    </div>
  );
};

export default Input;
