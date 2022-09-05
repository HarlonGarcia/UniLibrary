import React from 'react';
import { useState } from 'react';
import styles from './BookInfo.module.scss';
import MoreDetails from './MoreDetails/MoreDetails';

const BookInfo = ({title, subtitle, description, previewLink, publishedDate, pageCount, language}) => {
    const [view, setView] = useState(false);
    const clearHtmlRegex = /<[^>]*>?|&[a-z]+;/gm;

    return (
    <div className={styles.bookinfo__container}>
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <p className={view ? styles.long_description : styles.short_description}>{description.replace((clearHtmlRegex), ' ')}</p>
        <button className={styles.view_button} onClick={() => setView(!view)}>{ view ? 'Ver menos' : 'Ver mais'}</button>
        
        <div className={styles.preview__container}>
            <a href={previewLink}><button className={styles.preview_button}>Amostra grátis</button></a>
            <h5>Atenção: Alguns livros podem não conter uma amostra grátis!</h5>
        </div>

        <MoreDetails publishedDate={publishedDate} pageCount={pageCount} language={language}/>
    </div>
  )
}

export default BookInfo;