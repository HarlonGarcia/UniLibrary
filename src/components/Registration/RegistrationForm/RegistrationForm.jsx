import React from 'react';
import { useState } from 'react';
import styles from './RegistrationForm.module.scss';

import useForm from '../../../hooks/useForm';
import Input from '../../Shared/Input/Input';
import ButtonForm from '../../Shared/ButtonForm/ButtonForm';

import { MdCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md';
import { FcGoogle } from 'react-icons/fc';
import { signInWithGooglePopup, createUserDoc } from '../../../utils/firebase/firebase';

const RegistrationForm = () => {
    const [ accepted, setAccepted ] = useState(false);
    const username = useForm('username')
    const email = useForm('email');
    const password = useForm('password');
    const authorization = useForm('password');

    const logWithGoogle = async () => {
      const {user} = await signInWithGooglePopup();
      const userDocRef = await createUserDoc(user);
    }

    const handleSubmit = (event) => {
      event.preventDefault()

      if (username.validate() && email.validate() && password.validate() && authorization.validate()) {
        console.log('Passou');
      } else {
        console.log('Não passou');
      }
    }

    const buttons = {
      default: {
        width: "18rem",
        margin: "0 2rem 0 0"
      },
      google: {
        width: "18rem",
        margin: "0 2rem 0 0",
        backgroundColor: "transparent",
        color: "#222",
        border: "1px solid #222",
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
        label="Confirme sua senha" {...authorization} ></Input>
      </div>
      <div className={styles.footer__container}>
        <div className={styles.registration__footer}>
          <ButtonForm type='submit' label="Cadastrar-se" style={buttons.default} />
          <ButtonForm onClick={logWithGoogle} icon={<FcGoogle size='2rem' />} 
          label="Entrar com o Google" style={buttons.google}  />
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