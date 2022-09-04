import React from "react";
import styles from './Book.module.scss'
import { useParams } from 'react-router-dom';
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

const Book = () => {
    const [info, setInfo] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        axios(`${import.meta.env.VITE_APP_GOOGLE_API_URL}/volumes/${id}`)
        .then(({data}) => {
            setInfo(data.volumeInfo);
        });
    }, []);

    // "title":
    // "subtitle": 
    // "authors": []
    // "publisher":
    // "publishedDate":
    // "description":

    if (!info) return null;
    return (
    <div className={styles.book__container}>
      <p>{info.title}</p>
    </div>
  );
};

export default Book;
