import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dropbox from '../Dropbox/Dropbox';
import styles from './Header.module.scss';

const Header = ({logged}) => {
  return (
    <div className={styles.header}>
        <Link to="/" className={styles.header__home}>UniLibrary •</Link>
        <nav className={styles.header__nav}>
            <NavLink end to="/"> Início </NavLink>
            <Dropbox />
            
            { !logged && <NavLink to="/signup" className={styles.box}>Cadastrar-se</NavLink> }
            { !logged && <NavLink to="/login" className={styles.box}>Fazer login</NavLink> }   
        </nav>
    </div>
  )
}

export default Header;