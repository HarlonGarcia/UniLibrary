import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import styles from './Login.module.scss';
import Header from '../Shared/Header/Header';

const Login = () => {
  return (
    <div className={styles.login__container}>
    <Header noAuthBox={true}></Header>
    <div className={styles.login}>
      <div className={styles.login__image__cotainer}>
        <img src="src/assets/images/library.png" alt="Library Image" className={styles.image} />
      </div>
      <div className={styles.remaining}>
        <LoginForm></LoginForm>
      </div>
    </div>
    </div>
  )
}

export default Login;