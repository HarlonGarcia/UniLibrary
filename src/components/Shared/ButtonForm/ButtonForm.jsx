import React from 'react';
import styles from './ButtonForm.module.scss';

const ButtonForm = ({type, label, style, onClick}) => {
  return (
    <button className={styles.btn} type={type} style={style} onClick={onClick}>{label}</button>
  )
}

export default ButtonForm;