import React from 'react';
import style from './Dropbox.module.scss';
import { IoIosArrowDown } from 'react-icons/io'

const Dropbox = () => {
  return (
    <ul className={style.dropbox}>
        <li className={style.label}>
            Categorias ▾
            <ul className={style.dropdown}>
                <li className={style.item}>Artigos</li>
                <li className={style.item}>Livros</li>
                <li className={style.item}>Revistas</li>
                <li className={style.item}>Outros</li>
            </ul>
        </li>
    </ul>
  )
}

export default Dropbox;