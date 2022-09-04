import React from 'react';
import styles from './BookCard.module.scss';
import { TbBookOff } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';

const BookCard = ({id, title, image}) => {
    let thumbnail = image && image.thumbnail;
    const navigate = useNavigate();

    const handleClick = async ({target}) => {
      navigate(`/book/${target.id}`);
    }
  
    if (!thumbnail) return null;
    return (
    <div className={styles.book__card}>
      <h2 onClick={handleClick} id={id} className={styles.book__title}>{title || 'Sem título'}</h2>
      {thumbnail && <img src={thumbnail} className={styles.book__image} alt={title} />}
      {!thumbnail && <TbBookOff className={styles.book__icon}/>}
      <div className={styles.book__gradient}></div>
    </div>
  )
}

export default BookCard;