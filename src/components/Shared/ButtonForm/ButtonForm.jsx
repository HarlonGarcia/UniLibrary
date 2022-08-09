import React from 'react';
import './ButtonForm.scss';

const ButtonForm = ({label}) => {
  return (
    <button className='btn'>{label}</button>
  )
}

export default ButtonForm;