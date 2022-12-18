import React, { useState } from "react";
import styles from "./Input.module.scss";
import { GoEyeClosed, GoEye } from "react-icons/go";

// { (
//   <span onClick={handleClick} className={styles.hide}>
//
//   </span>
// )}

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
  const passwordType = hide ? "password" : "text";
  const isPassword = id === "password" || id === "authorization";
  const maxPassword = 20;

  const handleClick = () => {
    setHide(!hide);
  };

  return (
    <>
      <label htmlFor="inp" className={styles.inp}>
        <input
          style={inputstyle}
          name={id}
          type={
            id === "password" || id === "authorization" ? passwordType : type
          }
          id={id}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
          size={5}
          maxLength={isPassword ? maxPassword : Infinity}
        />
        <span className={styles.label}>{label}</span>

        {isPassword && (
          <span onClick={handleClick} className={styles.icon}>
            {hide ? <GoEyeClosed /> : <GoEye />}
          </span>
        )}

        <span className={styles.focus_bg}></span>
        {error && <small className={styles.message__error}>{error}</small>}
      </label>
    </>
  );
};

export default Input;
