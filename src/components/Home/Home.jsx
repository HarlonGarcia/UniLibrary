import React from 'react';
import './Home.scss';
import Banner from '../Banner/Banner';
import Header from '../Shared/Header/Header';

const Home = () => {
  return (
    <div id='home_page'>
      <Header />
      <Banner />
      Essa é a home
    </div>
  )
}

export default Home;