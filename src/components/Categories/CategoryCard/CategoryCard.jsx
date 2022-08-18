import React from 'react';
import './CategoryCard.scss'

const CategoryCard = ({icon, label}) => {
  
  const handleClick = () => {
    console.log('oi');
  }

  return (
    <div className="category" onClick={handleClick}>
        <div className="flip-card">
            <div className="flip-card-front">
                {icon}
            </div>
            <div className="flip-card-back">
                <h4>{label}</h4>
            </div>
        </div>
    </div>
  )
}

export default CategoryCard;