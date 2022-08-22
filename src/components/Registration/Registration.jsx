import React from 'react';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import styles from './Registration.module.scss'

const Registration = () => {
  return (
    <div className={styles.registration}>
      <div className={styles.remaining_signup}>
        <RegistrationForm></RegistrationForm>
      </div>
      <img src="src/assets/images/library.png" alt="Library Image" id='lib_img' />
    </div>
  )
}

export default Registration;
