import React from 'react';
import styles from './BotaoLigar.module.css';

const Botao = ({ valor, funcaoClick }) => {
  return (
    <button onClick={funcaoClick} className={styles.botaoLigar}>
      {valor}
    </button>
  );
};

export default Botao;
