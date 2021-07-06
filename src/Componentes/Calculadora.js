import React from 'react';
import styles from './Calculadora.module.css';
import Tecla from './Tecla';
import Botao from './Botao';
import BotaoMaior from './BotaoMaior';
import BotaoLigar from './BotaoLigar';

const Calculadora = () => {
  const [valor1, setValor1] = React.useState([0]);
  const [valor2, setValor2] = React.useState([0]);
  const [total, setTotal] = React.useState([]);
  const [controle, setControle] = React.useState(true);
  const [operador, setOperador] = React.useState(null);
  const [ligar, setLigar] = React.useState(false);

  function ligarCalculadora() {
    setLigar(!ligar);
  }

  //efeito que acontece sempre que desligamos e ligamos a calculadora (quando o estado 'ligar' muda )
  React.useEffect(() => {
    if (ligar === false) {
      setValor1(null);
      setValor2(null);
      setControle(true);
      setTotal(null);
    } else if (ligar === true) {
      setValor1(0);
      setValor2(0);
      setControle(true);
      setTotal(0);
    }
  }, [ligar]);

  /*React.useEffect(() => {
    console.log('');
    console.log('valor1:', valor1);
    console.log('valor2:', valor2);
    console.log('total:', total);
    console.log('control:', controle);
    console.log('operador:', operador);
    console.log('ligar:', ligar);
  }, [valor1, valor2, total, controle, operador, ligar]);*/

  function setarValor({ target }) {
    if (ligar === true) {
      if (controle === true && valor1 < 99999999) {
        setValor1(Number(valor1 + target.value));
        setTotal(0);
      } else if (controle === false && valor2 < 99999999) {
        setValor2(Number(valor2 + target.value));
      }
    }
  }

  function somar() {
    if (valor1 === 0) {
      setValor1(total);
      setTotal(0);
      setControle(false);
    } else if (valor1 > 0) {
      setControle(false);
      setOperador('soma');
    }
  }
  function subtrair() {
    if (valor1 === 0) {
      setValor1(total);
      setTotal(0);
      setControle(false);
      setOperador('subtracao');
    } else if (valor1 > 0) {
      setControle(false);
      setOperador('subtracao');
    }
  }
  function multiplicar() {
    if (valor1 === 0) {
      setValor1(total);
      setTotal(0);
      setControle(false);
      setOperador('multiplicacao');
    } else if (valor1 > 0) {
      setControle(false);
      setOperador('multiplicacao');
    }
  }

  function dividir() {
    if (valor1 === 0) {
      setValor1(total);
      setTotal(0);
      setControle(false);
      setOperador('divisao');
    } else if (valor1 > 0) {
      setControle(false);
      setOperador('divisao');
    }
  }

  function porcentagem() {
    if (valor1 === 0) {
      setValor1(total);
      setTotal(0);
      setControle(false);
      setOperador('porcentagem');
    } else if (valor1 > 0) {
      setControle(false);
      setOperador('porcentagem');
    }
  }

  function igual() {
    /*parte que verifica se o valor do total é valido */
    if (ligar === true) {
      var Finito = !isNaN(total) && !isFinite(total); //se o valor do total não for Nan e não for Infinito retorna true
      if (Finito === true) {
        setTotal(0);
      } else if (total !== 0 && valor1 === 0 && valor2 === 0) {
        //se o total é diferente de zero quando o botao igual for acionado o total irá para o valor 1
        setTotal(total);
      } else {
        if (operador === 'soma' && valor1 !== 0 && valor2 !== 0) {
          //se o operador tiver o valor de 'soma' e os valores 1 e 2 forem == 0, então será feita a operação de desejada
          const resultado = valor1 + valor2; //faz a operação desejada
          const final = parseFloat(resultado.toFixed(8)); //define que o resultado final não pode ter mais de 8 dígitos
          setTotal(final);
          setValor1(0); //zera o valor 1 pois a operação foi já foi executada
          setValor2(0); //zera o valor 2 pois a operação foi já foi executada
          setControle(true); //seta o controle para verdadeiro
        }
        if (operador === 'subtracao' && valor1 !== 0 && valor2 !== 0) {
          //se o operador tiver o valor de 'soma' e os valores 1 e 2 forem == 0, então será feita a operação de desejada
          const resultado = valor1 - valor2; //faz a operação desejada
          const final = parseFloat(resultado.toFixed(8)); //define que o resultado final não pode ter mais de 8 dígitos
          setTotal(final);
          setValor1(0); //zera o valor 1 pois a operação foi já foi executada
          setValor2(0); //zera o valor 2 pois a operação foi já foi executada
          setControle(true); //seta o controle para verdadeiro
        }
        if (operador === 'multiplicacao' && valor1 !== 0 && valor2 !== 0) {
          //se o operador tiver o valor de 'soma' e os valores 1 e 2 forem == 0, então será feita a operação de desejada
          const resultado = valor1 * valor2; //faz a operação desejada
          const final = parseFloat(resultado.toFixed(8)); //define que o resultado final não pode ter mais de 8 dígitos
          setTotal(final);
          setValor1(0); //zera o valor 1 pois a operação foi já foi executada
          setValor2(0); //zera o valor 2 pois a operação foi já foi executada
          setControle(true); //seta o controle para verdadeiro
        }
        if (operador === 'divisao' && valor1 !== 0 && valor2 !== 0) {
          //se o operador tiver o valor de 'soma' e os valores 1 e 2 forem == 0, então será feita a operação de desejada
          const resultado = valor1 / valor2; //faz a operação desejada
          const final = parseFloat(resultado.toFixed(8)); //define que o resultado final não pode ter mais de 8 dígitos
          setTotal(final);
          setValor1(0); //zera o valor 1 pois a operação foi já foi executada
          setValor2(0); //zera o valor 2 pois a operação foi já foi executada
          setControle(true); //seta o controle para verdadeiro
        }
        if (operador === 'porcentagem' && valor1 !== 0 && valor2 !== 0) {
          //se o operador tiver o valor de 'soma' e os valores 1 e 2 forem == 0, então será feita a operação de desejada
          const resultado = (valor2 / 100) * valor1; //faz a operação desejada
          const final = parseFloat(resultado.toFixed(8)); //define que o resultado final não pode ter mais de 8 dígitos
          setTotal(final);
          setValor1(0); //zera o valor 1 pois a operação foi já foi executada
          setValor2(0); //zera o valor 2 pois a operação foi já foi executada
          setControle(true); //seta o controle para verdadeiro
        }
      }
    }
  }
  //limpa todos os valores
  function limpar() {
    if (ligar === true) {
      setValor1(0);
      setValor2(0);
      setControle(true);
      setTotal(0);
    }
  }

  return (
    <section className="corpoCalculadora">
      <span className={styles.logo}>MasterCalculator</span>
      <div className={styles.displaybase}>
        <div className={styles.display}>
          {total !== 0 ? (
            <span>{total}</span>
          ) : (
            <span>{controle === true ? valor1 : valor2}</span>
          )}
        </div>
      </div>
      <div className={styles.teclado}>
        <div className={styles.numeros}>
          <Tecla funcaoClick={setarValor} valor="1" />
          <Tecla funcaoClick={setarValor} valor="2" />
          <Tecla funcaoClick={setarValor} valor="3" />
          <Tecla funcaoClick={setarValor} valor="4" />
          <Tecla funcaoClick={setarValor} valor="5" />
          <Tecla funcaoClick={setarValor} valor="6" />
          <Tecla funcaoClick={setarValor} valor="7" />
          <Tecla funcaoClick={setarValor} valor="8" />
          <Tecla funcaoClick={setarValor} valor="9" />
          <Tecla funcaoClick={setarValor} valor="0" />
          <Tecla funcaoClick={setarValor} valor="00" />
          <Botao funcaoClick={porcentagem} valor="%" />
        </div>
        <div className={styles.sinais}>
          <Botao funcaoClick={limpar} valor="C" />
          <BotaoLigar funcaoClick={ligarCalculadora} valor="ON" />
          <Botao funcaoClick={multiplicar} valor="X" />
          <Botao funcaoClick={dividir} valor="÷" />
          <Botao funcaoClick={subtrair} valor="-" />
          <Botao funcaoClick={igual} valor="=" />
          <BotaoMaior funcaoClick={somar} valor="+" />
        </div>
      </div>
    </section>
  );
};

export default Calculadora;
