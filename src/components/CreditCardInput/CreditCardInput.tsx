import React, { useState, useRef } from 'react';

interface CreditCardInputProps {
  onChange?: (value: string) => void;
}

const CreditCardInput: React.FC<CreditCardInputProps> = ({ onChange }) => {
  const [values, setValues] = useState<string[]>(['', '', '', '']);
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleInputChange = (index: number, value: string) => {
    if (/^[0-9]*$/.test(value) && value.length <= 4) {
      const newValues = [...values];
      newValues[index] = value;
      setValues(newValues);

      if (onChange) {
        onChange(newValues.join(' '));
      }

      if (value.length === 4 && index < 3) {
        inputRefs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (index: number, event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Backspace' && values[index].length === 0 && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  return (
    <div style={{ display: 'flex', gap: '5px' }}>
      {values.map((value, index) => (
        <input
          key={index}
          type="text"
          value={value}
          onChange={(e) => handleInputChange(index, e.target.value)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          ref={(el) => (inputRefs.current[index] = el!)}
          maxLength={4}
          style={{ width: '50px', textAlign: 'center' }}
        />
      ))}
    </div>
  );
};

export default CreditCardInput;
