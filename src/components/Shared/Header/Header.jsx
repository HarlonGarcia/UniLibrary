import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

import { UserContext } from "../../../context/UserContext";
import { signOutUser } from "../../../utils/firebase/firebase";
import Dropbox from "../Dropbox/Dropbox";

const Header = () => {
  const { currentUser } = useContext(UserContext);
  // TODO Implement footer navigation in the header to small screens

  return (
    <div className={styles.header}>
      <Link to="/" className={styles.header__logo}>
        UniLibrary •
      </Link>
      <nav className={styles.header__nav}>
        <NavLink end to="/">
          Início
        </NavLink>
        <Dropbox />
        {/* {currentUser && <img src={currentUser.photoURL} alt='user photo'></img>} */}

        {currentUser ? (
          <span className={styles.box} onClick={signOutUser}>
            Deslogar
          </span>
        ) : (
          <div>
            <NavLink to="/login" className={styles.box}>
              Fazer login
            </NavLink>
            <NavLink to="/signup" className={styles.box}>
              Cadastrar-se
            </NavLink>
          </div>
        )}
      </nav>
      <div className={styles.header_menu}>Menu</div>
    </div>
  );
};

export default Header;
