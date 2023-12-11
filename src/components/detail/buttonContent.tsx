import React from 'react';

interface ButtonContentProps {
  content: string;
}

const ButtonContent: React.FC<ButtonContentProps> = ({ content }) => {
  return (
    <div style={{ border: '1.5px solid black', borderRadius: '8px', padding: '5px 10px', display: 'inline-block' }}>
      {content}
    </div>
  );
};

export default ButtonContent;