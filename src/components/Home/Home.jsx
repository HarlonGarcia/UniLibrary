import React from 'react';
import { BiSearch } from 'react-icons/bi';
import { VscSearch } from 'react-icons/vsc'

import './Home.scss';
import Banner from '../Shared/Banner/Banner';
import Header from '../Shared/Header/Header';
import Input from '../Shared/Input/Input';
import Categories from '../Categories/Categories';

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
    </div>
  )
}

export default Home;