import React from 'react';
import './Book.scss';
import { TbBookOff } from 'react-icons/tb'


const Book = ({title, image}) => {
    let thumbnail = image && image.thumbnail;
  
    return (
    <div className='book__card'>
      <h2 className='book__title'>{title || 'Sem título'}</h2>
      {thumbnail && <img src={thumbnail} className='book__image' alt={title} />}
      {!thumbnail && <TbBookOff className='book__icon'/>}
      <div className='book__gradient'></div>
    </div>
  )
}

export default Book;