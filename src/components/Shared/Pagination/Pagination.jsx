import React from 'react';
import './Pagination.scss';
import { MdOutlineNavigateNext, MdOutlineNavigateBefore } from 'react-icons/md';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill, BsFillArrowLeftSquareFill
, BsFillArrowRightSquareFill } from 'react-icons/bs'

const Pagination = ({current, max, handleClick}) => {
    const iconStyle = {
        width: '1.5rem',
        color: 'rgba(0, 0, 0, .6)'
    }

  return (
    <div className='pagination'>
        {current > 0 ? 
        <button id='prev' onClick={handleClick}><BsFillArrowLeftSquareFill size={iconStyle.width}/></button> : 
        <button><BsFillArrowLeftSquareFill style={{cursor: 'default'}} 
        size={iconStyle.width} color={iconStyle.color}/></button> }
        
        <p><span>{current}</span> / {max}</p>
        
        {current < max ? 
        <button id='next' onClick={handleClick}><BsFillArrowRightSquareFill size={iconStyle.width}/></button> : 
        <button><BsFillArrowRightSquareFill style={{cursor: 'default'}} 
        size={iconStyle.width} color={iconStyle.color}/></button> }
    </div>
  )
}

export default Pagination;