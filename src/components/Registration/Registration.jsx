import React from 'react';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import './Registration.scss'

const Registration = () => {
  return (
    <div className='registration'>
      <div className='remaining_signup'>
        <RegistrationForm></RegistrationForm>
      </div>
      <img src="src/assets/images/library.png" alt="Library Image" id='lib_img' />
    </div>
  )
}

export default Registration;
