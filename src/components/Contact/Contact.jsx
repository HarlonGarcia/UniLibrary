import React from 'react';
import './Contact.scss';
import { MdSend } from 'react-icons/md';

import Header from '../Shared/Header/Header';
import ButtonForm from '../Shared/ButtonForm/ButtonForm';
import Footer from '../Shared/Footer/Footer';

const Contact = () => {
  return (
    <div className='contact__page'>
        <Header logged={true}/>
        <div className='contact__form'>
            <form className='form__center'>
                <label htmlFor='contact__textarea' id='contact__label'>Fale conosco:</label>
                <textarea name='message' id='contact__textarea' placeholder='Digite sua mensagem'></textarea>
                <ButtonForm type='submit' label={<MdSend/>} style={{ borderRadius: '10px', 
                width: '10rem', alignSelf: 'center', marginBottom: '0', position: 'relative',
                bottom: '-20px', backgroundColor: '#EEEEEE', color: '#50007f',
                boxShadow: '0px 8px 22px -3px rgba(80, 0, 127, .6)'}}/>
            </form>
        </div>
        <Footer />
    </div>
  )
}

export default Contact