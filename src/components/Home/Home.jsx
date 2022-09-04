import React, { useEffect, useState } from 'react';
import styles from './Home.module.scss';
import { VscSearch } from 'react-icons/vsc';
import { motion } from "framer-motion";
import axios from 'axios';

import Books from '../Books/Books'
import Banner from '../Shared/Banner/Banner';
import Header from '../Shared/Header/Header';
import Categories from '../Categories/Categories';
import Footer from '../Shared/Footer/Footer';
import Wave from '../Shared/SvgComponents/HomeWave';
import Pagination from '../Shared/Pagination/Pagination';
import Loading from '../Shared/SvgComponents/Loading/Loading';

const Home = () => {
  const [search, setSearch] = useState(''); 
  const [books, setBooks] = useState('');
  const [load, setLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(0)
  
  const maxResults = 15
  const offset = maxResults * currentPage

  useEffect(() => {
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
      const {data} = await axios(`${import.meta.env.VITE_APP_GOOGLE_API_URL}/volumes?q=${search}&maxResults=${maxResults}&startIndex=${offset}&key=${import.meta.env.VITE_APP_GOOGLE_API_KEY}`);

      setBooks(data.items);
      setTimeout(() => setLoad(false), 700)
    }
  }

  return (
    <motion.div 
    id={styles.home__page}
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0}}>
      <Banner />
      <div className={styles.search}>
        <VscSearch size={"3.5rem"} style={{ paddingTop: '1.25rem', paddingRight: '1rem', cursor: 'pointer' }} 
        onClick={searchBook} />
        <input type="text" placeholder="O que está procurando?" id={styles.search__input}
        onChange={handleChange} onKeyPress={searchBook} />
      </div>
      {!books && !load && <Categories style={{ marginBottom: '1rem'}} /> }
      {books && <hr className={styles.line} data-content="Resultados da pesquisa"/>}
      
      {load && <Loading/>}
      {!load && <Books data={books}/>}

      {books && !load && <Pagination max={maxResults} current={currentPage} handleClick={handleClick}/>}
      {/* <Wave color='#131313' style={{position: 'absolute', zIndex: '-1', bottom: 0, paddingBottom: '2rem'}}/> */}
      <Footer />
    </motion.div>
  )
}

export default Home;