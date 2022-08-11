import React from 'react';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import './Registration.scss'

export const Registration = () => {
  return (
    <div className='registration'>
      <RegistrationForm></RegistrationForm>
      <img src="src/assets/images/library.png" alt="Library Image" id='lib_img' />
    </div>
  )
}