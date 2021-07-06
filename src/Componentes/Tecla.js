import React from 'react';
import styles from './Tecla.module.css';
const Tecla = ({ valor, funcaoClick, classe }) => {
  return (
    <button onClick={funcaoClick} value={valor} className={styles.tecla}>
      {valor}
    </button>
  );
};

export default Tecla;
