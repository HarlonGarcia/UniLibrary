import React from 'react';
import styles from './MoreDetails.module.scss';
import { all_locales } from '../../../../utils/constants/languages-code';
import { months } from '../../../../utils/constants/months';

const MoreDetails = ({publishedDate, pageCount, language}) => {
  const bookLanguage = all_locales[language] ? all_locales[language].language : language;

  let dateFormatted = "Data não informada";  

  if (publishedDate) {
    const date = new Date(publishedDate);
    dateFormatted = ("0" + (date.getDate() + 1)).slice(-2) + " de " 
        + months[date.getMonth()] + " de " + date.getFullYear();
  }

  return (
    <div className={styles.moredetails__container}>
      <h3 className={styles.moredetails__topic}>Sobre o livro</h3>
      <h4><span className={styles.moredetails__metadata}>Data de publicação:</span> {dateFormatted}</h4>
      <h4><span className={styles.moredetails__metadata}>Idioma:</span> {bookLanguage}</h4>
      <h4><span className={styles.moredetails__metadata}>Quantidade de páginas:</span> {pageCount}</h4>
    </div>
  )
}

export default MoreDetails