import React from 'react';
import styles from './HelpAndSupport.module.scss';
import Footer from '../Shared/Footer/Footer';
import { motion } from 'framer-motion';

const HelpAndSupport = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0}} 
    className={styles.support}>
        <Footer />
    </motion.div>
  )
}

export default HelpAndSupport;