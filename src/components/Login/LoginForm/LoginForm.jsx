import React from 'react';
import './LoginForm.scss';
import Input from '../../Shared/Input/Input';
import ButtonForm from '../../Shared/ButtonForm/ButtonForm';

const LoginForm = () => {
  return (
    <form className="form">
      <h1>UniLibrary</h1>
      <div className='thisdiv'>
        <Input placeholder="Nome do usuário" id="username" label="Usuário"></Input>
        <Input placeholder="Digite sua senha" id="password" label="Senha"></Input>
      </div>
      <ButtonForm label="Entrar"></ButtonForm>
    </form>

  )
}

export default LoginForm;