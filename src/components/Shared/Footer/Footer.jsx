import React from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footer'>
        <nav>
            <NavLink to='/sobre' className='footer__link'>Quem somos</NavLink>
            <NavLink to='/contact' className='footer__link'>Fale conosco</NavLink>
            <NavLink to='/support' className='footer__link'>Ajuda e suporte</NavLink>
            <NavLink to='/terms' className='footer__link'>Política de privacidade</NavLink>
            <h4>&copy; UniLibrary</h4>
        </nav>
    </div>
  )
}

export default Footer;