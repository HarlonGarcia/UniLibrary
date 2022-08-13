import React, { useEffect } from 'react';
import { useRef } from 'react';
import './Banner.scss';

const Banner = () => {

    return (
        <div id='banner'>
            <img src="src/assets/images/bg-book.png" alt="banner" />
            <h1>UniLibrary</h1>
        </div>
    )
}

export default Banner