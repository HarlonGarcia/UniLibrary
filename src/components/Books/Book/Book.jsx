import React from 'react';
import './Book.scss'


const Book = ({title, image}) => {
    let thumbnail = image && image.smallThumbnail;
  
    return (
    <div className='book__card'>
        <h2 className='book__title'>REACT</h2>
        <img src={thumbnail || ''} className='book__image' alt={title}></img>
    </div>
  )
}

export default Book