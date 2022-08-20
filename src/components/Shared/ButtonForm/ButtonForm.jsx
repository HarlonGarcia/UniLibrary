import React from 'react';
import './ButtonForm.scss';

const ButtonForm = ({type, label, style}) => {
  return (
    <button className='btn' type={type} style={style}>{label}</button>
  )
}

export default ButtonForm;