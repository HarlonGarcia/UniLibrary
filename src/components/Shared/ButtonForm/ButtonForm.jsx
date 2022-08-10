import React from 'react';
import './ButtonForm.scss';

const ButtonForm = ({label, style}) => {
  return (
    <button className='btn' style={style}>{label}</button>
  )
}

export default ButtonForm;