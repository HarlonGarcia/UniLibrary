import React from 'react';
import styles from './BookCover.module.scss';

const BookCover = ({imageUrl, authors, publisher}) => {
  const image = imageUrl ? imageUrl.small || imageUrl.thumbnail : ''; 

  return (
    <div className={styles.bookcover__container}>
        <img src={image} alt="Imagem do Livro" className={styles.image__container}/>
        <h2 className={styles.secondary_info}>
            <span>Autor(es): </span>
        {authors.length > 1 ? authors.map((author, index) => <li key={index}>{author}</li>) : authors}</h2>
        <h2 className={styles.secondary_info}><span>Editora: </span>{publisher}</h2>
    </div>
  )
}

export default BookCover;