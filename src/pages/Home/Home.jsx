import React, { useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { VscSearch } from "react-icons/vsc";
import { motion } from "framer-motion";
import axios from "axios";

import Books from "../../components/Books/Books";
import Banner from "../../components/Shared/Banner/Banner";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Shared/Footer/Footer";
import Pagination from "../../components/Shared/Pagination/Pagination";
import Loading from "../../components/Shared/SvgComponents/Loading/Loading";

const Home = () => {
  const [search, setSearch] = useState("");
  const [books, setBooks] = useState("");
  const [load, setLoad] = useState(false);
  const [currentPage, setCurrentPage] = useState(0);

  const maxResults = 15;
  const offset = maxResults * currentPage;

  useEffect(() => {
    searchBook();
  }, [currentPage]);

  const handleChange = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };

  const handleClick = ({ currentTarget }) => {
    currentTarget.id === "prev"
      ? setCurrentPage(currentPage - 1)
      : setCurrentPage(currentPage + 1);
  };

  const searchBook = async (event) => {
    if ((event && event.key === "Enter") || search) {
      setLoad(true);
      const { data } = await axios(
        `${
          import.meta.env.VITE_APP_GOOGLE_API_URL
        }/volumes?q=${search}&maxResults=${maxResults}&startIndex=${offset}&key=${
          import.meta.env.VITE_APP_GOOGLE_API_KEY
        }`
      );

      setBooks(data.items);
      setTimeout(() => setLoad(false), 700);
    }
  };

  return (
    <motion.div
      className={styles.home_page}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Banner />
      <div className={styles.home_body}>
        <div className={styles.search}>
          <VscSearch
            size={"3.5rem"}
            style={{
              paddingTop: "1.25rem",
              paddingRight: "1rem",
              cursor: "pointer",
            }}
            onClick={searchBook}
          />
          <input
            type="text"
            placeholder="O que está procurando?"
            className={styles.search__input}
            onChange={handleChange}
            onKeyDown={searchBook}
          />
        </div>
        {!books && !load && <Categories />}
        {books && (
          <hr className={styles.line} data-content="Resultados da pesquisa" />
        )}

        {load && <Loading />}
        {!load && <Books data={books} />}

        {books && !load && (
          <Pagination
            max={maxResults}
            current={currentPage}
            handleClick={handleClick}
          />
        )}
      </div>
    </motion.div>
  );
};

export default Home;
