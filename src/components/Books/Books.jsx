import React from 'react';
import styles from './Books.module.scss';
import Book from './Book/Book';
import { motion } from "framer-motion";

const Books = ({data}) => {

  const bookItem = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    }
  }
    
  const bookContainer = {
    visible: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.075
      }
    }
  }

  return (
    <motion.ul className={styles.book__container} initial="hidden" animate="visible" variants={bookContainer}>
        {data && data.map(({volumeInfo}, index) => 
        <motion.li variants={bookItem}>
          <Book key={index} title={volumeInfo.title} image={volumeInfo.imageLinks}/>
        </motion.li>)}
    </motion.ul>
  )
}

export default Books;