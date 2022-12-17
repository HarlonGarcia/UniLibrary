import React from "react";
import styles from "./HelpAndSupport.module.scss";
import { VscGithub } from "react-icons/vsc";

// TODO implement api to send all messages to database
// TODO create faq array and show faq by array.map
// TODO make it responsive

const HelpAndSupport = () => {
  return (
    <div className={styles.support_container}>
      <div className={styles.support_header}>
        <p>
          Este site é um projeto open-source e foi feito para fins educacionais.
          Você pode ser um contribuidor e{" "}
          <a
            href="https://github.com/HarlonGarcia/UniLibrary"
            target="_blank"
            rel="noopener noreferr"
          >
            ver nosso projeto no github.
          </a>
        </p>
        <button>
          <a
            href="https://github.com/HarlonGarcia/UniLibrary"
            target="_blank"
            rel="noopener noreferr"
          >
            <VscGithub className={styles.support_icon} />
          </a>
        </button>
      </div>
      <div className={styles.support_body}>
        <div className={styles.support_form}>
          <label htmlFor="support_message">Como podemos ajudá-lo?</label>
          <input id="support_message" placeholder="Digitar uma mensagem" />
        </div>
        <div className={styles.support_faq_container}>
          <h2>Dúvidas frequentes</h2>
          <div className={styles.support_faq_body}>
            <div>
              <h3>Como posso baixar o livro?</h3>
              <p>
                Os livros fazem parte de uma biblioteca do google, então não são
                do nosso controle, porém alguns livros tem amostra grátis!
              </p>
            </div>
            <div>
              <h3>Como posso contribuir com o projeto?</h3>
              <p>
                O UniLibrary é um projeto pessoal que aceita contribuições da
                comunidade, você pode conferir no github como fazer uma
                contribuição
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpAndSupport;
