import React, { useEffect, useState } from 'react';
import './Home.scss';
import { VscSearch } from 'react-icons/vsc'

import Books from '../Books/Books'
import Banner from '../Shared/Banner/Banner';
import Header from '../Shared/Header/Header';
import Categories from '../Categories/Categories';
import Footer from '../Shared/Footer/Footer';
import Loading from '../Shared/Loading/Loading'
import Pagination from '../Shared/Pagination/Pagination';

const Home = () => {
  const [search, setSearch] = useState(''); 
  const [books, setBooks] = useState('');
  const [load, setLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(0)
  
  const maxResults = 15
  const offset = maxResults * currentPage

  useEffect(() => {
    console.log(`Index: ${currentPage} | Page: ${offset}`);
    searchBook()
  }, [currentPage])

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  }

  const handleClick = ({currentTarget}) => {
    currentTarget.id === 'prev' ? setCurrentPage(currentPage - 1) : setCurrentPage(currentPage + 1)
  }

  const searchBook = async (event) => {
    if ((event && event.key === 'Enter') || search) {
      setLoad(true)
      const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${search}&maxResults=${maxResults}&startIndex=${offset}&key=AIzaSyDg5Semzv0U9jO9VSBE2xkOMMoE3YmQhTI`);
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

      {books && !load && <Pagination max={maxResults} current={currentPage} handleClick={handleClick}/>}
      <Footer />
    </div>
  )
}

export default Home;