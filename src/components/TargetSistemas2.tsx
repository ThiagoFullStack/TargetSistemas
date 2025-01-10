// src/components/Question2.tsx.


import React, { useState } from 'react';

const TargetSistemas2: React.FC = () => {
  const [inputNumber, setInputNumber] = useState<number>(0);
  const [isInFibonacci, setIsInFibonacci] = useState<boolean>(false);

  const fibonacci = (num: number): boolean => {
    let a = 0, b = 1, c = 0;
    while (c < num) {
      c = a + b;
      a = b;
      b = c;
    }
    return c === num;
  };

  const handleSubmit = () => {
    setIsInFibonacci(fibonacci(inputNumber));
  };

  return (
    <div>
      <h2>Questão 2: Verificar Fibonacci</h2>
      <input 
        type="number" 
        value={inputNumber} 
        onChange={(e) => setInputNumber(Number(e.target.value))} 
        placeholder="Digite um número"
      />
      <button onClick={handleSubmit}>Verificar</button>
      {isInFibonacci !== null && (
        <p>{isInFibonacci ? "O número pertence à sequência de Fibonacci" : "O número NÃO pertence à sequência de Fibonacci"}</p>
      )}
    </div>
  );
};


export default TargetSistemas2;
