import React from "react";
import LoginForm from "../../pages/Login/LoginForm/LoginForm";
import styles from "./Login.module.scss";
import { motion } from "framer-motion";

const Login = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.login_container}
    >
      <LoginForm></LoginForm>
    </motion.div>
  );
};

export default Login;
