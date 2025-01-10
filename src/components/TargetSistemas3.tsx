//  components/Question3.tsx.


import React, { useEffect, useState } from 'react';

const TargetSistemas3: React.FC = () => {
  const [min, setMin] = useState<number>(0);
  const [max, setMax] = useState<number>(0);
  const [aboveAverageDays, setAboveAverageDays] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/data/faturamento.json');
        if (!response.ok) {
          throw new Error('Erro ao carregar os dados.');
        }
        const json: number[] = await response.json();
        const values = json.filter((v: number) => v > 0); // Ignorar dias sem faturamento
        const avg: number = values.reduce((sum: number, val: number) => sum + val, 0) / values.length;
        setMin(Math.min(...values)); // Menor valor
        setMax(Math.max(...values)); // Maior valor
        setAboveAverageDays(values.filter((val: number) => val > avg).length); // Dias acima da média
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message); // Usando tipo específico Error
        } else {
          setError('Erro desconhecido'); // Caso o erro não seja do tipo Error
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Esse efeito roda uma vez, quando o componente é montado

  return (
    <div className="target-sistemas3">
      <h2>Questão 3: Faturamento Diário</h2>
      {loading ? (
        <p className="loading">Carregando dados...</p>
      ) : error ? (
        <p className="error">Erro: {error}</p>
      ) : (
        <div className="data">
          <p><strong>Menor valor de faturamento:</strong> R${min}</p>
          <p><strong>Maior valor de faturamento:</strong> R${max}</p>
          <p><strong>Dias com faturamento acima da média:</strong> {aboveAverageDays} dias</p>
        </div>
      )}
    </div>
  );
};

export default TargetSistemas3;





