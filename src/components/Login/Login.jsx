import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import styles from './Login.module.scss';

const Login = () => {
  return (
    <div className={styles.login}>
      <img src="src/assets/images/library.png" alt="Library Image" className={styles.image} />
      <div className={styles.remaining}>
        <LoginForm></LoginForm>
      </div>
    </div>
  )
}

export default Login;