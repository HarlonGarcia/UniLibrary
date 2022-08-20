import React, { useState } from 'react';
import './Home.scss';
import { VscSearch } from 'react-icons/vsc'

import Books from '../Books/Books'
import Banner from '../Shared/Banner/Banner';
import Header from '../Shared/Header/Header';
import Categories from '../Categories/Categories';
import Footer from '../Shared/Footer/Footer';
import Loading from '../Shared/Loading/Loading'

const Home = () => {
  const [search, setSearch] = useState(''); 
  const [books, setBooks] = useState('');
  const [load, setLoad] = useState(false);

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
    console.log(event.target.value);
  }

  const searchBook = async (event) => {
    if (event.key = 'Enter') {
        setLoad(true)
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=15&key=AIzaSyDg5Semzv0U9jO9VSBE2xkOMMoE3YmQhTI`);
        const json = await response.json();
        setBooks(json.items);

        setTimeout(() => setLoad(false), 700)
    } 
  }

  return (
    <div id='home__page'>
      <Header />
      <Banner />
      <div className='search'>
        <VscSearch size={"3.5rem"} style={{ paddingTop: '1.25rem', paddingRight: '1rem', cursor: 'pointer' }} 
        onClick={searchBook} />
        <input type="text" placeholder="O que está procurando?" id="search__input" 
        onChange={handleChange} onKeyPress={searchBook} />
      </div>
      {!books && !load && <Categories style={{ marginBottom: '1rem'}} /> }
      {books && <hr className='line' data-content="Resultados da pesquisa"/>}
      {load && <Loading width={50} background={'rgba(0, 0, 0, .025)'} color='#50007F'/>}
      {!load && <Books data={books}/>}
      <Footer />
    </div>
  )
}

export default Home;