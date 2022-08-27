import React from 'react';
import { useState } from 'react';
import styles from './RegistrationForm.module.scss';

import useForm from '../../../hooks/useForm';
import Input from '../../Shared/Input/Input';
import ButtonForm from '../../Shared/ButtonForm/ButtonForm';

import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';

import { createUserByEmailAndPassword, createUserDoc } from '../../../utils/firebase/firebase';

const RegistrationForm = () => {
    const [ accepted, setAccepted ] = useState(false);
    const username = useForm('username')
    const email = useForm('email');
    const password = useForm('password');
    const confirmPassword = useForm('password');

    const handleSubmit = async (event) => {
      event.preventDefault()

      if (!username.validate() || !email.validate() || !password.validate() || !confirmPassword.validate()) {
        alert('Invalid information');
        return;
      } else if (password.value !== confirmPassword.value) {
        alert('Password mismatch')
        return;
      } else {
        try {
          const { user } = await createUserByEmailAndPassword(email.value, password.value)
          const response = await createUserDoc(user, { displayName: username.value });
          console.log(response);
        } catch (error) {
          
          error.code === 'auth/email-already-in-use' ? alert('Email already in use') :
          console.log('Encountered an error while user creation: ', error);
        }
      }
    }

    const buttons = {
      default: {
        width: "18rem",
        margin: "0 2rem 0 0"
      }
    };

    return (
    <form className={styles.registration__form} onSubmit={handleSubmit}>
      <h1>Dados de cadastro</h1>
      <div className={styles.registration__inputs}>
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
        label="Confirme sua senha" {...confirmPassword} ></Input>
      </div>
      <div className={styles.footer__container}>
        <div className={styles.registration__footer}>
          <ButtonForm type='submit' label="Cadastrar-se" style={buttons.default} />
          <ButtonForm googleStyle={true} onClick={() => console.log('oi')} icon={<FcGoogle size='2rem' />} 
          label="Entrar com o Google" style={buttons.default}  />
        </div>
        <div id={styles.service__terms}>
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