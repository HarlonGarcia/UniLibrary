import React from 'react';
import './RegistrationForm.scss';
import Input from '../../Shared/Input/Input';
import ButtonForm from '../../Shared/ButtonForm/ButtonForm';
import { MdCheckBoxOutlineBlank } from 'react-icons/md'
import { MdCheckBox } from 'react-icons/md'
import { useState } from 'react';
import useForm from '../../../hooks/useForm';

const RegistrationForm = () => {
    const [ accepted, setAccepted ] = useState(false);
    const username = useForm('username')
    const email = useForm('email');
    const password = useForm('password');
    const authorization = useForm('password');

    const handleSubmit = (event) => {
      event.preventDefault()

      if (username.validate() && email.validate() && password.validate() && authorization.validate()) {
        console.log('Passou');
      } else {
        console.log('Não passou');
      }
    }

    const customStyle = {
        width: "18rem",
        margin: "0 2rem 0 0"
    };

    return (
    <form className="registration_form" onSubmit={handleSubmit}>
      <h1>Dados de cadastro</h1>
      <div className='registration_inputs'>
        <Input inputstyle={{height: "3.25rem"}} type="text" 
        placeholder="Digite seu nome de usuário" id="username" 
        label="Nome de usuário" {...username} ></Input>

        <Input inputstyle={{height: "3.25rem"}} type="password" 
        placeholder="Digite sua senha" id="password" 
        label="Senha" {...password} ></Input>

        <Input inputstyle={{height: "3.25rem"}} type="text" 
        placeholder="exemplo@universidade.com" id="email" 
        label="Email institucional" {...email} ></Input>

        <Input inputstyle={{height: "3.25rem"}} type="password" 
        placeholder="Digite sua senha" id="authorization" 
        label="Confirme sua senha" {...authorization} ></Input>
      </div>
      <div className='registration_footer'>
        <ButtonForm type='submit' label="Cadastrar-se" style={customStyle}></ButtonForm>
        <div id='service_terms'>
            <span onClick={() => setAccepted(!accepted)}>
              {accepted ? <MdCheckBox size={22}/> : <MdCheckBoxOutlineBlank size={22}/> }
            </span>
            <h3>Eu li e concordo com os <a>termos e condições de uso</a></h3>
        </div>
      </div>
    </form>
  )
}

export default RegistrationForm;