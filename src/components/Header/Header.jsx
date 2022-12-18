import React, { useContext } from "react";
import styles from "./Header.module.scss";
import { Link, NavLink } from "react-router-dom";
import { useCycle, motion } from "framer-motion";

import { UserContext } from "../../context/UserContext";
import { signOutUser } from "../../utils/firebase/firebase";
import Dropbox from "../Shared/Dropbox/Dropbox";
import MenuToggle from "../Shared/MenuToggle/MenuToggle";
import Navigation from "../Navigation/Navigation";

const sidebar = {
  open: {
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  },
  closed: {
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useCycle(false, true);
  const { currentUser } = useContext(UserContext);

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
      <motion.nav
        initial={false}
        animate={isMenuOpen ? "open" : "closed"}
        className={styles.header_menu}
      >
        <Navigation isOpen={isMenuOpen} />
        <MenuToggle toggle={() => setIsMenuOpen()} />
      </motion.nav>
    </div>
  );
};

export default Header;
