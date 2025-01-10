// src/components/Question4.tsx.


import React from 'react';

const TargetSistemas4: React.FC = () => {
  const faturamentoPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
  };

  const totalFaturamento = Object.values(faturamentoPorEstado).reduce(
    (total, valor) => total + valor,
    0
  );

  return (
    <div>
      <h2>Questão 4: Percentual de Representação dos Estados</h2>
      <ul>
        {Object.entries(faturamentoPorEstado).map(([estado, faturamento]) => {
          const percentual = ((faturamento / totalFaturamento) * 100).toFixed(2);
          return (
            <li key={estado}>
              {estado}: {percentual}% ({faturamento.toFixed(2)})
            </li>
          );
        })}
      </ul>
    </div>
  );
};


export default TargetSistemas4;
