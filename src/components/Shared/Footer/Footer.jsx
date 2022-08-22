import React from 'react';
import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <nav className={styles.footer__nav}>
            <NavLink to='/sobre' className={styles.footer__link}>Quem somos</NavLink>
            <NavLink to='/contact' className={styles.footer__link}>Fale conosco</NavLink>
            <NavLink to='/support' className={styles.footer__link}>Ajuda e suporte</NavLink>
            <NavLink to='/terms' className={styles.footer__link}>Política de privacidade</NavLink>
            <h4>&copy; UniLibrary</h4>
        </nav>
    </footer>
  )
}

export default Footer;