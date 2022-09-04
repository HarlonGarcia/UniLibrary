import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

import { UserContext } from '../../../context/UserContext';
import Dropbox from '../Dropbox/Dropbox';

const Header = ({noAuthBox}) => {
  const { currentUser } = useContext(UserContext);

  return (
    <div className={styles.header}>
        <Link to="/" className={styles.header__home}>UniLibrary •</Link>
        <nav className={styles.header__nav}>
            <NavLink end to="/"> Início </NavLink>
            <Dropbox />
            
            { !noAuthBox && <NavLink to="/signup" className={styles.box}>Cadastrar-se</NavLink> }
            { !noAuthBox && <NavLink to="/login" className={styles.box}>Fazer login</NavLink> }   
        </nav>
    </div>
  )
}

export default Header;