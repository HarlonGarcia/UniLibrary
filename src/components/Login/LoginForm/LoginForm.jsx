import React from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';
import useForm from '../../../hooks/useForm';
import styles from './LoginForm.module.scss';
import Input from '../../Shared/Input/Input';
import ButtonForm from '../../Shared/ButtonForm/ButtonForm';

const LoginForm = () => {
  const username = useForm('username');
  const password = useForm('password');

  const handleSubmit = (event) => {
    event.preventDefault()

    if (username.validate() && password.validate()) {
      console.log('Passou');
    } else {
      console.log('Não passou');
    }
  }

  return (
    <form className={styles.login__form} onSubmit={handleSubmit}>
      <h1>UniLibrary •</h1>
      <div className={styles.login__inputs}>
        <Input fieldstyle={{width: "100%"}} inputstyle={{height: "3.25rem"}}
        type="text" placeholder="Nome do usuário" id="username" label="Usuário"
        {...username} />

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
      <div id={styles.login__options}>
        <FcGoogle size={40} color={"#262626"}/>
        <h3>Continuar com Google</h3>
      </div>
      <h3>Não tem conta? <Link to="/signup">Cadastre-se!</Link></h3>
    </form>
  )
}

export default LoginForm;