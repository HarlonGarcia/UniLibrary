import React, { useState } from 'react';
import styles from './RegistrationForm.module.scss';
import { auth_erros } from '../../../utils/constants/auth-errors';
import swal from 'sweetalert';

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

    const defaultAlert = {    
      closeOnClickOutside: true,
      closeOnEsc: true,
      timer: 1500,
      buttons: false,
      className: styles.swal,
      icon: 'info'
    }

    const handleSubmit = async (event) => {
      event.preventDefault()

      if (!username.validate() || !email.validate() || !password.validate() || !confirmPassword.validate()) {
        swal("Verifique seus dados e tente novamente!", {
          ...defaultAlert
        });
        return;
      } else if (password.value !== confirmPassword.value) {
        swal("Senha de confirmação incompatível!", {
          ...defaultAlert
        });
        return;
      } else if (!accepted) {
        swal("Por favor, aceite os termos e condições!", {
          ...defaultAlert
        });
      } else {
        try {
          const { user } = await createUserByEmailAndPassword(email.value, password.value)
          await createUserDoc(user, { displayName: username.value });
        } catch (error) {
          auth_erros[error.code] ? alert(auth_erros[error.code].message) :
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
        placeholder="exemplo@email.com" id="email" 
        label="Email" {...email} ></Input>

        <Input inputstyle={{height: "3.25rem"}} type="password" 
        placeholder="Digite sua senha" id="authorization" 
        label="Confirme sua senha" {...confirmPassword} ></Input>
      </div>
        
      <div className={styles.registration__footer}>
        <ButtonForm type='submit' label="Cadastrar-se" style={buttons.default} />
        
        <div className={styles.service__terms}>
          <span onClick={() => setAccepted(!accepted)}>
            {accepted ? <MdCheckBox size={20}/> : <MdCheckBoxOutlineBlank size={20}/> }
          </span>
          <h3>Eu li e concordo com os <a>termos e condições de uso</a></h3>
        </div>
      </div>
    </form>
  )
}

export default RegistrationForm;