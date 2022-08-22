import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Dropbox from '../Dropbox/Dropbox';
import style from './Header.module.scss';

const Header = ({logged}) => {
  return (
    <div className={style.header}>
        <Link to="/" className={style.header__home}>UniLibrary •</Link>
        <nav className={style.header__nav}>
            <NavLink end to="/"> Início </NavLink>
            <Dropbox />
            
            { !logged && <NavLink to="/signup" className={style.box}>Cadastrar-se</NavLink> }
            { !logged && <NavLink to="/login" className={style.box}>Fazer login</NavLink> }   
        </nav>
    </div>
  )
}

export default Header;