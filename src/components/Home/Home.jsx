import React, { useState } from 'react';
import './Home.scss';
import { VscSearch } from 'react-icons/vsc'

import Books from '../Books/Books'
import Banner from '../Shared/Banner/Banner';
import Header from '../Shared/Header/Header';
import Input from '../Shared/Input/Input';
import Categories from '../Categories/Categories';
import Footer from '../Shared/Footer/Footer';

const Home = () => {
  const [search, setSearch] = useState(''); 
  const [books, setBooks] = useState('');

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    console.log(event.target.value);
  }

  const searchBook = async (event) => {
    if (event.key = 'Enter') {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=16&key=AIzaSyDg5Semzv0U9jO9VSBE2xkOMMoE3YmQhTI`);
        const json = await response.json();
        setBooks(json.items);
        console.log(json.items[0]);
    } 
  }

  return (
    <div id='home_page'>
      <Header />
      <Banner />
      <div className='search'>
        <VscSearch size={"2.375rem"} />
        <input type="text" placeholder="O que está procurando?" id="search__books" onChange={handleChange} onKeyPress={searchBook} />
      </div>
      <Categories />
      <hr className='line' data-content="NEWS LETTER"/>

      <Books data={books}/>
      <Footer />
    </div>
  )
}

export default Home;