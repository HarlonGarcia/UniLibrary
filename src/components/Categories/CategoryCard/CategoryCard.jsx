import React from 'react';
import './CategoryCard.scss'

const CategoryCard = ({icon, label}) => {
  return (
    <div className="category">
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