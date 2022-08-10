import React from 'react';
import { FcGoogle } from 'react-icons/fc';

import './LoginForm.scss';
import Input from '../../Shared/Input/Input';
import ButtonForm from '../../Shared/ButtonForm/ButtonForm';

const LoginForm = () => {
  return (
    <form className="login_form">
      <h1>UniLibrary •</h1>
      <div className='login_inputs'>
        <Input type="text" placeholder="Nome do usuário" id="username" label="Usuário"></Input>
        <Input type="password" placeholder="Digite sua senha" id="password" label="Senha"></Input>
      </div>
      <ButtonForm label="Entrar"></ButtonForm>
      <div id='login_divisor'>
        <hr />
        <div> OU </div>
        <hr />
      </div>
      <div id='login_options'>
        <FcGoogle size={40} color={"#262626"}/>
        <h3>Continuar com Google</h3>
      </div>
      <h3>Não tem conta? <a>Cadastre-se!</a></h3>
    </form>
  )
}

export default LoginForm;