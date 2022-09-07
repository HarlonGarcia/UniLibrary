import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import styles from './Header.module.scss';

import { UserContext } from '../../../context/UserContext';
import { signOutUser } from '../../../utils/firebase/firebase';
import Dropbox from '../Dropbox/Dropbox';

const Header = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }

  return (
    <div className={styles.header}>
        <Link to="/" className={styles.header__home}>UniLibrary •</Link>
        <nav className={styles.header__nav}>
            <NavLink end to="/"> Início </NavLink>
            <Dropbox />
            {currentUser ? 
            <NavLink to="/" className={styles.box} onClick={signOutHandler} >Deslogar</NavLink> :
            <div>
              <NavLink to="/login" className={styles.box}>Fazer login</NavLink>
              <NavLink to="/signup" className={styles.box}>Cadastrar-se</NavLink>
            </div>
            }
            {/* { <NavLink to="/signup" className={styles.box}>Cadastrar-se</NavLink> }
            { <NavLink to="/login" className={styles.box}>Fazer login</NavLink> }    */}
        </nav>
    </div>
  )
}

export default Header;