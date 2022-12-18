import React from "react";
import styles from "./Navigation.module.scss";
import { MdHome, MdHelp } from "react-icons/md";
import { NavLink } from "react-router-dom";

const Navigation = ({ isOpen }) => {
  return (
    <div
      style={
        isOpen
          ? { width: "9rem", right: "0px" }
          : { width: "0px", right: "-3rem" }
      }
      className={styles.navigation_container}
    >
      <div className={styles.navigation_items}>
        <NavLink to="/">
          <MdHome />
          <strong>Inicio</strong>
        </NavLink>
        <NavLink to="/support">
          <MdHelp />
          <strong>Suporte</strong>
        </NavLink>
      </div>
      <div className={styles.navigation_items}>
        <NavLink to="/login" className={styles.auth_box}>
          Fazer login
        </NavLink>
      </div>
    </div>
  );
};

export default Navigation;
