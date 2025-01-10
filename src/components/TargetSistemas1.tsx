// src/components/Question1.tsx.


import React from 'react';

const TargetSistemas1: React.FC = () => {
  const INDICE = 13;
  let SOMA = 0;
  let K = 0;

  while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
  };

  return (
    <div>
      <h2>Questão 1: Soma de 1 até INDICE</h2>
      <p>O valor da SOMA é: {SOMA}</p>
    </div>
  );
};  


export default TargetSistemas1;
