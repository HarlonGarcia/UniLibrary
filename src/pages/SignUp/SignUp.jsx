import React from "react";
import SignUpForm from "./SignUpForm/SignUpForm";
import styles from "./SignUp.module.scss";
import { motion } from "framer-motion";

const SignUp = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={styles.registration__container}
    >
      <div className={styles.registration}>
        <div className={styles.remaining_signup}>
          <SignUpForm></SignUpForm>
        </div>
        <div className={styles.registration__image__cotainer}>
          <img
            src="src/assets/images/library.png"
            alt="Library Image"
            className={styles.image}
          />
        </div>
      </div>
    </motion.div>
  );
};

export default SignUp;
