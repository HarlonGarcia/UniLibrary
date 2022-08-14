import React from 'react';
import { AiFillApple } from 'react-icons/ai';
import './CategoryCard.scss'

const CategoryCard = ({icon}) => {
  return (
    <div className="category">
        <div className="flip-card">
            <div className="flip-card-front">
                {/* <AiFillApple size={'3rem'} /> */}
                {icon}
            </div>
            <div className="flip-card-back">
                <h3>Sistemas</h3>
            </div>
        </div>
    </div>
  )
}

export default CategoryCard;