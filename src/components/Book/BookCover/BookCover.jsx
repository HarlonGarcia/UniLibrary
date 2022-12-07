import React from "react";
import styles from "./BookCover.module.scss";

const BookCover = ({ imageUrl, authors, publisher }) => {
  const imageSize =
    imageUrl.smallThumbnail ||
    imageUrl.thumbnail ||
    imageUrl.small ||
    imageUrl.medium ||
    imageUrl.large;

  const image = imageSize ? imageSize : "";

  return (
    <div className={styles.bookcover__container}>
      <img
        src={image}
        alt="Imagem do Livro"
        className={styles.image__container}
      />
      <h2 className={styles.secondary_info}>
        <span>Autor(es): </span>
        <ul>
          {authors.length > 1
            ? authors.map((author, index) => <li key={index}>{author}</li>)
            : authors}
        </ul>
      </h2>
      <h2 className={styles.secondary_info}>
        <span>Editora: </span>
        <small>{publisher}</small>
      </h2>
    </div>
  );
};

export default BookCover;
