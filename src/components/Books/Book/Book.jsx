import React from 'react';
import styles from './Book.module.scss';
import { TbBookOff } from 'react-icons/tb';

const Book = ({title, image}) => {
    let thumbnail = image && image.thumbnail;
  
    if (!thumbnail) return null;
    return (
    <div className={styles.book__card}>
      <h2 className={styles.book__title}>{title || 'Sem título'}</h2>
      {thumbnail && <img src={thumbnail} className={styles.book__image} alt={title} />}
      {!thumbnail && <TbBookOff className={styles.book__icon}/>}
      <div className={styles.book__gradient}></div>
    </div>
  )
}

export default Book;