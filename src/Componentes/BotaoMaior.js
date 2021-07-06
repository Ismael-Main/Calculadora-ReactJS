import React from 'react';
import styles from './BotaoMaior.module.css';

const Botao = ({ valor, funcaoClick }) => {
  return (
    <button onClick={funcaoClick} className={styles.botaoMaior}>
      {valor}
    </button>
  );
};

export default Botao;
