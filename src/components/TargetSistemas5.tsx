// src/components/Question5.tsx.


import React, { useState } from 'react';

const TargetSistemas5: React.FC = () => {
  const [inputString, setInputString] = useState<string>('');
  const [reversedString, setReversedString] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputString(event.target.value);
  };

  const reverseString = (str: string): string => {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
      reversed += str[i];
    }
    return reversed;
  };

  const handleSubmit = () => {
    setReversedString(reverseString(inputString));
  };

  return (
    <div>
      <h2>Questão 5: Inverter os Caracteres de uma String</h2>
      <input
        type="text"
        value={inputString}
        onChange={handleInputChange}
        placeholder="Digite uma string"
      />
      <button onClick={handleSubmit}>Inverter</button>
      <p>String invertida: {reversedString}</p>
    </div>
  );
};

export default TargetSistemas5;

