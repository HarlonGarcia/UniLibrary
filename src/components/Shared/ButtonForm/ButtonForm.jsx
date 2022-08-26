import React from 'react';
import styles from './ButtonForm.module.scss';

const ButtonForm = ({type, label, style, onClick, icon}) => {
  return (
    <button className={styles.btn} type={type} style={style} onClick={onClick}>
      {icon}
      <span>{label}</span>
    </button>
  )
}

export default ButtonForm;