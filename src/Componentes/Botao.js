import React from 'react';
import styles from './Botao.module.css';

const Botao = ({ valor, funcaoClick }) => {
  return (
    <button onClick={funcaoClick} className={styles.botao}>
      {valor}
    </button>
  );
};

export default Botao;
