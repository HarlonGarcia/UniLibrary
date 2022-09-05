import React from "react";
import styles from './Book.module.scss'
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

import BookCover from "./BookCover/BookCover";
import BookInfo from "./BookInfo/BookInfo";

const Book = () => {
    const [info, setInfo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios(`${import.meta.env.VITE_APP_GOOGLE_API_URL}/volumes/${id}`)
        .then(({data}) => {
            setInfo(data);
        });
    }, []);

    // "title":
    // "subtitle": 
    // "authors": []
    // "publisher":
    // "publishedDate":
    // "description":
    // "accessInfo":
    //       "webReaderLink": 

    if (!info) return null;
    return (
      
    <div className={styles.book__container}>
      <BookCover imageUrl={info.volumeInfo.imageLinks} authors={info.volumeInfo.authors} publisher={info.volumeInfo.publisher}/>
      <BookInfo title={info.volumeInfo.title} subtitle={info.volumeInfo.subtitle} 
      description={info.volumeInfo.description} previewLink={info.accessInfo.webReaderLink}/>
    </div>
  );
};

export default Book;
