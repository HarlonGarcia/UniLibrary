import React from 'react';
import styles from './HelpAndSupport.module.scss';
import Header from '../Shared/Header/Header';
import Footer from '../Shared/Footer/Footer';

const HelpAndSupport = () => {
  return (
    <div className={styles.support}>
        <Header noAuthBox={true}/>
        <Footer />
    </div>
  )
}

export default HelpAndSupport;