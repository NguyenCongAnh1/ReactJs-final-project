import React, { ChangeEvent, useState } from 'react';
import './customInput.scss'


interface CustomInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  minLength?: number;
  outInput: (e: string | null) => void;
  maxLength?: number;
  pattern?: RegExp;
  required?: boolean;
  errPattern?: string;
  width?: string;
}

const CustomInput: React.FC<CustomInputProps> = ({ value, onChange, placeholder, minLength, maxLength, pattern, required, errPattern, width, outInput }) => {
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;

    // Validate required
    if (required && inputValue.trim() === '') {
      setError('This field is required.');
    }
    // Validate minLength
    else if (minLength && inputValue.length < minLength) {
      setError(`Input must be at least ${minLength} characters.`);
    }
    // Validate maxLength
    else if (maxLength && inputValue.length > maxLength) {
      setError(`Input must be at most ${maxLength} characters.`);
    }
    // Validate pattern
    else if (pattern && !pattern.test(inputValue)) {
      setError(errPattern ? errPattern : null);
    } else {
      setError(null);
    }
    
    if(!error){
      outInput(error);
    }
    onChange(inputValue);
  };

  
  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={handleInputChange}
        placeholder={placeholder}
        style={{width: width }}
        className='custom-input with-placeholder-style'
        id={value}
      />
      {error && <div className='error-message'>{error}</div>}
    </div>
  );
};

export default CustomInput;
