import React from 'react';
import styles from './Dropbox.module.scss';

const Dropbox = () => {
  return (
    <ul className={styles.dropbox}>
        <li className={styles.label}>
            Categorias ▾
            <ul className={styles.dropdown}>
                <li className={styles.item}>Artigos</li>
                <li className={styles.item}>Livros</li>
                <li className={styles.item}>Revistas</li>
                <li className={styles.item}>Outros</li>
            </ul>
        </li>
    </ul>
  )
}

export default Dropbox;