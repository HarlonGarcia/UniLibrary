import React from "react";
import styles from "./Footer.module.scss";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <NavLink to="/support" className={styles.footer__link}>
        Ajuda e suporte
      </NavLink>
      <NavLink to="/terms" className={styles.footer__link}>
        Política de privacidade
      </NavLink>
    </footer>
  );
};

export default Footer;
