import React, { useContext } from 'react';
import styles from './LoginForm.module.scss';
import { Link } from 'react-router-dom';
import swal from 'sweetalert';
import { FcGoogle } from 'react-icons/fc';

import { UserContext } from '../../../context/UserContext';
import { auth_erros } from '../../../utils/constants/auth-errors';
import useForm from '../../../hooks/useForm';
import Input from '../../Shared/Input/Input';
import ButtonForm from '../../Shared/ButtonForm/ButtonForm';

import { signInWithGooglePopup, createUserDoc, signInUserByEmailAndPassword } from '../../../utils/firebase/firebase';

const LoginForm = () => {
  const email = useForm('email');
  const password = useForm('password');

  const { setCurrentUser } = useContext(UserContext);

  const defaultAlert = {    
    closeOnClickOutside: true,
    closeOnEsc: true,
    timer: 1500,
    buttons: false,
    className: styles.swal,
    icon: 'info'
  }

  const loginWithGoogle = async () => {
    const {user} = await signInWithGooglePopup();
    await createUserDoc(user);
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
  
    if (!email.validate() || !password.validate()) {
      swal("Email ou senha inválido!", {
        ...defaultAlert
      });
      return;
    } else {
      try {
        const {user} = await signInUserByEmailAndPassword(email.value, password.value);
        setCurrentUser(user)
      } catch (error) {
        auth_erros[error.code] ? swal(auth_erros[error.code].message, {...defaultAlert}) :
        console.log("Something wrong when user login: " + error);
      }
    }

  }

  return (
    <form className={styles.login__form} onSubmit={handleSubmit}>
      <h1>UniLibrary •</h1>
      <div className={styles.login__inputs}>
        <Input fieldstyle={{width: "100%"}} inputstyle={{height: "3.25rem"}}
        type="text" placeholder="exemplo@email.com" id="email" label="Email"
        {...email} />

        <Input fieldstyle={{width: "100%"}} inputstyle={{height: "3.25rem"}} 
        type="password" placeholder="Digite sua senha" id="password" label="Senha"
        {...password} />
      </div>
      <ButtonForm type='submit' label="Entrar"></ButtonForm>
      <div id={styles.login__divisor}>
        <hr />
        <div> OU </div>
        <hr />
      </div>

      <button onClick={loginWithGoogle} className={styles.login__options}>
        <FcGoogle size={30} />
        <h3>Continuar com Google</h3>
      </button>

      <h3>Não tem conta? <Link to="/signup">Cadastre-se!</Link></h3>
    </form>
  )
}

export default LoginForm;