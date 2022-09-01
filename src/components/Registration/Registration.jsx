import React from 'react';
import RegistrationForm from './RegistrationForm/RegistrationForm';
import styles from './Registration.module.scss';
import Header from '../Shared/Header/Header';
import { motion } from 'framer-motion';

const Registration = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0}} 
    className={styles.registration__container}>
      <div className={styles.registration}>
        <div className={styles.remaining_signup}>
          <RegistrationForm></RegistrationForm>
        </div>
        <div className={styles.registration__image__cotainer}>
          <img src="src/assets/images/library.png" alt="Library Image" className={styles.image} />
        </div>
      </div>
    </motion.div>
  )
}

export default Registration;
