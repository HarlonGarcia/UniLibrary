import React from 'react';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import styles from './Registration.module.scss';
import Header from '../Shared/Header/Header';

const Registration = () => {
  return (
    <div className={styles.registration__container}>
      <Header noAuthBox={true} />
      <div className={styles.registration}>
        <div className={styles.remaining_signup}>
          <RegistrationForm></RegistrationForm>
        </div>
        <div className={styles.registration__image__cotainer}>
          <img src="src/assets/images/library.png" alt="Library Image" className={styles.image} />
        </div>
      </div>
    </div>
  )
}

export default Registration;
