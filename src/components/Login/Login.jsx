import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import styles from './Login.module.scss';
import { motion } from 'framer-motion';

const Login = () => {
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0}}
    className={styles.login__container}>
    <div className={styles.login}>
      <div className={styles.login__image__cotainer}>
        <img src="src/assets/images/library.png" alt="Library Image" className={styles.image} />
      </div>
      <div className={styles.remaining}>
        <LoginForm></LoginForm>
      </div>
    </div>
    </motion.div>
  )
}

export default Login;