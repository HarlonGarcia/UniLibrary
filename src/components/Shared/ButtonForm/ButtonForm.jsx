import React from 'react';
import styles from './ButtonForm.module.scss';

const ButtonForm = ({type, label, style}) => {
  return (
    <button className={styles.btn} type={type} style={style}>{label}</button>
  )
}

export default ButtonForm;