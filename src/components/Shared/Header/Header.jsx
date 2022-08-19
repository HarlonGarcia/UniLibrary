import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.scss';

const Header = ({logged}) => {
  return (
    <div className='header'>
        <Link to="/" end className='header__home'>UniLibrary •</Link>
        <nav className='header__nav'>
            <NavLink end to="/"> Início </NavLink>
            <NavLink to="/sobre"> Sobre </NavLink>
            
            { !logged && <NavLink to="/signup" className="box">Cadastrar-se</NavLink> }
            { !logged && <NavLink to="/login" className="box">Fazer login</NavLink> }   
        </nav>
    </div>
  )
}

export default Header;