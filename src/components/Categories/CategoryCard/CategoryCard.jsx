import React from "react";
import styles from "./CategoryCard.module.scss";

const CategoryCard = ({ icon, label }) => {
  const handleClick = () => {
    console.log("CategoryCard");
  };

  return (
    <div className={styles.category} onClick={handleClick}>
      <div className={styles.flip__card}>
        <div className={styles.flip__card__front}>{icon}</div>
        <div className={styles.flip__card__back}>
          <h4>{label}</h4>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard;
