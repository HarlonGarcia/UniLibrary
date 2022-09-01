import React from 'react';
import styles from './Contact.module.scss';
import Footer from '../Shared/Footer/Footer';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <>
      <motion.div 
      className={styles.contact__page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0}}>
          <div className={styles.contact__form}>
              <form className={styles.form__center}>
                  <label htmlFor='contact__textarea' className={styles.contact__label}>Fale conosco:</label>
                  <textarea name='message' id='contact__textarea' className={styles.contact__textarea} 
                  placeholder='Digite sua mensagem'></textarea>
              </form>
          </div>
      </motion.div>
      <Footer />
    </>
  )
}

export default Contact