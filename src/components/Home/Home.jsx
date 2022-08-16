import React from 'react';
import './Home.scss';

import { VscSearch } from 'react-icons/vsc'
import Banner from '../Shared/Banner/Banner';
import Header from '../Shared/Header/Header';
import Input from '../Shared/Input/Input';
import Categories from '../Categories/Categories';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
  return (
    <div id='home_page'>
      <Header />
      <Banner />
      <div className='search'>
        <VscSearch size={"2.375rem"} />
        <Input inputstyle={{width: "30rem", height: "2.5rem", padding: "0 2.5rem"}} type="text"
        placeholder="O que está procurando?" id="search" />
      </div>
      <Categories />
      <Footer />
    </div>
  )
}

export default Home;