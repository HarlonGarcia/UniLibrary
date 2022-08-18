import React, { useState } from 'react';
import './Books.scss'
import Book from './Book/Book'

const Books = ({data}) => {
  return (
    <div className='book__container'>
        {data && data.map(({volumeInfo}, index) => 
        <Book key={index} title={volumeInfo.title} image={volumeInfo.imageLinks} />)}
    </div>
  )
}

export default Books