import React from 'react';
import styles from './ButtonForm.module.scss';

const ButtonForm = ({type, label, style, onClick, icon, googleStyle}) => {
  return (
    <button className={googleStyle ? styles.googleBtn : styles.btn} type={type} style={style} onClick={onClick}>
      {icon}
      <span>{label}</span>
    </button>
  )
}

export default ButtonForm;