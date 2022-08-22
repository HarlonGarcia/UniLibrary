import React from 'react';
import styles from './Books.module.scss';
import Book from './Book/Book';

const Books = ({data}) => {
  return (
    <div className={styles.book__container}>
        {data && data.map(({volumeInfo}, index) => 
        <Book key={index} title={volumeInfo.title} image={volumeInfo.imageLinks} />)}
    </div>
  )
}

export default Books;