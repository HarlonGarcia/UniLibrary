import React from 'react';
import styles from './Books.module.scss';
import { motion } from "framer-motion";
import BookCard from './BookCard/BookCard';

const Books = ({data, style, cardStyle}) => {
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
    <motion.ul style={style} className={styles.book__container} initial="hidden" animate="visible" variants={bookContainer}>
        {data && data.map(({volumeInfo, id}, index) => 
        <motion.li variants={bookItem} key={index}>
          <BookCard style={cardStyle} id={id} title={volumeInfo.title} image={volumeInfo.imageLinks}/>
        </motion.li>)}
    </motion.ul>
  )
}

export default Books;