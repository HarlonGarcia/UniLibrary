import React from 'react'
import styles from './About.module.scss';
import Footer from '../Shared/Footer/Footer'
import Header from '../Shared/Header/Header';

const About = () => {
  return (
    <div className={styles.about}>
        <Header />
        // TODO 
        <Footer />
    </div>
  )
}

export default About;