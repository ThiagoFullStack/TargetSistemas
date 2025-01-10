// src/components/Question3.tsx.


import React, { useEffect, useState } from 'react';

interface FaturamentoItem {
  dia: string;
  valor: string;
}

const TargetSistemas3: React.FC = () => {
  const [resultado, setResultado] = useState<{
    menorFaturamento: number;
    maiorFaturamento: number;
    diasAcimaDaMedia: number;
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/faturamento.json');
        if (!response.ok) throw new Error('Erro ao carregar os dados');

        const json = await response.json();
        const faturamentoData: FaturamentoItem[] = json.rows.row;

        // Filtra os dias com faturamento
        const valoresFaturamento = faturamentoData
          .map(item => parseFloat(item.valor))
          .filter(valor => !isNaN(valor));

        // Calculando a média
        const mediaFaturamento = valoresFaturamento.reduce((acc, valor) => acc + valor, 0) / valoresFaturamento.length;

        // Calculando o menor e maior faturamento
        const menorFaturamento = Math.min(...valoresFaturamento);
        const maiorFaturamento = Math.max(...valoresFaturamento);

        // Calculando os dias acima da média
        const diasAcimaDaMedia = faturamentoData.filter(
          item => parseFloat(item.valor) > mediaFaturamento
        ).length;

        setResultado({
          menorFaturamento,
          maiorFaturamento,
          diasAcimaDaMedia,
        });

      } catch (error) {
        console.error('Erro ao carregar os dados:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Resultado do Faturamento</h2>
      {resultado ? (
        <div>
          <p>Menor Faturamento: R${resultado.menorFaturamento.toFixed(2)}</p>
          <p>Maior Faturamento: R${resultado.maiorFaturamento.toFixed(2)}</p>
          <p>Número de dias com faturamento acima da média: {resultado.diasAcimaDaMedia}</p>
        </div>
      ) : (
        <p>Carregando dados...</p>
      )}
    </div>
  );
};


export default TargetSistemas3;
