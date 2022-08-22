import React from 'react';
import styles from './Banner.module.scss';

const Banner = () => {
    return (
        <div id={styles.banner}>
            <img src="src/assets/images/bg-book.png" alt="banner" />
            <h1>UniLibrary</h1>
        </div>
    )
}

export default Banner