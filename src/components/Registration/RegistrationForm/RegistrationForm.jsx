import React from 'react';
import './RegistrationForm.scss';
import Input from '../../Shared/Input/Input';
import ButtonForm from '../../Shared/ButtonForm/ButtonForm';
import { MdCheckBoxOutlineBlank } from 'react-icons/md'
import { MdCheckBox } from 'react-icons/md'
import { useState } from 'react';

const RegistrationForm = () => {
    const [ accepted, setAccepted ] = useState(false);

    const handleClick = () => {
        setAccepted(!accepted)
    }

    const customStyle = {
        width: "18rem",
        margin: "0 2rem 0 0"
    };

    return (
    <form className="registration_form">
      // TODO Validação de formulário
      <h1>Dados de cadastro</h1>
      <div className='registration_inputs'>
        <Input inputstyle={{height: "3.25rem"}} type="text" placeholder="Digite seu nome de usuário" id="username" label="Nome de usuário"></Input>
        <Input inputstyle={{height: "3.25rem"}} type="password" placeholder="Digite sua senha" id="password" label="Senha"></Input>
        <Input inputstyle={{height: "3.25rem"}} type="email" placeholder="exemplo@universidade.com" id="institutional_email" label="Email institucional"></Input>
        <Input inputstyle={{height: "3.25rem"}} type="password" placeholder="Digite sua senha" id="password-auth" label="Confirme sua senha"></Input>
      </div>
      <div className='registration_footer'>
        <ButtonForm label="Cadastrar-se" style={customStyle}></ButtonForm>
        <div id='service_terms'>
            <span onClick={handleClick}>
            {accepted ? <MdCheckBox size={22}/> : <MdCheckBoxOutlineBlank size={22}/> }
            </span>
            <h3>Eu li e concordo com os <a>termos e condições de uso</a></h3>
        </div>
      </div>
    </form>
  )
}

export default RegistrationForm;