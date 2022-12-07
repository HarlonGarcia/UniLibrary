import React, { useState, useEffect } from "react";
import styles from "./BookInfo.module.scss";
import axios from "axios";

import MoreDetails from "./MoreDetails/MoreDetails";
import Books from "../../Books/Books";

const BookInfo = ({
  title,
  subtitle,
  description,
  previewLink,
  publishedDate,
  pageCount,
  language,
  pdf,
  authors,
}) => {
  const [authorBooks, setAuthorBooks] = useState("");
  const [view, setView] = useState(false);

  const clearHtmlRegex = /<[^>]*>?|&[a-z]+;/gm;
  const maxResults = 4;
  let authorIndex = 0;

  useEffect(() => {
    axios(
      `${import.meta.env.VITE_APP_GOOGLE_API_URL}/volumes?q=inauthor:${
        authors[authorIndex]
      }&maxResults=${maxResults}&key=${import.meta.env.VITE_APP_GOOGLE_API_KEY}`
    ).then(({ data }) => {
      setAuthorBooks(data.items);
    });
  }, [title]);

  return (
    <div className={styles.bookinfo__container}>
      <h1>{title}</h1>
      <h3>{subtitle}</h3>
      {description ? (
        <>
          <p
            className={
              view ? styles.long_description : styles.short_description
            }
          >
            {description.replace(clearHtmlRegex, " ")}
          </p>
          <button className={styles.view_button} onClick={() => setView(!view)}>
            {view ? "Ver menos" : "Ver mais"}
          </button>
        </>
      ) : (
        <p className={styles.no_description}>Não contém descrição</p>
      )}

      <div className={styles.buttons__container}>
        {pdf.isAvailable && (
          <a href={pdf.acsTokenLink} download>
            <button
              data-back="Download"
              data-front="Baixar e-book"
              className={styles.download_button}
            ></button>
          </a>
        )}

        <a href={previewLink}>
          <button className={styles.preview_button}>Amostra grátis</button>
        </a>
        <h5>Atenção: Alguns livros podem não conter uma amostra grátis!</h5>
      </div>

      <MoreDetails
        publishedDate={publishedDate}
        pageCount={pageCount}
        language={language}
      />

      <h2 className={styles.books_topic}>Mais livros desse autor</h2>
      <Books
        data={authorBooks}
        style={{ width: "100%", marginBottom: "1rem", marginLeft: "-1rem" }}
      />
    </div>
  );
};

export default BookInfo;
