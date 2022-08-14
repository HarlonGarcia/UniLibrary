import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Header.scss';

const Header = () => {
  const [ logged, setLogged ] = useState(false);
  
  
  
  return (
    <div className='header'>
        <h1>UniLibrary •</h1>
        <nav>
            <NavLink to="/">Início</NavLink>
            <NavLink to="sobre">Sobre</NavLink>
            { !logged && <NavLink to="signup" className="box">Cadastrar-se</NavLink> }
            { !logged && <NavLink to="login" className="box">Fazer login</NavLink> }   
        </nav>
    </div>
  )
}

export default Header;