import React from 'react';

interface RenderButtonProps {
  onClick: () => void;
  disabled?: boolean;
}

const RenderButton: React.FC<RenderButtonProps> = ({ onClick, disabled = false }) => {
  const buttonStyle: React.CSSProperties = {
    backgroundColor: disabled ? '#cccccc' : '#4CAF50',
    border: 'none',
    color: disabled ? '#666666' : 'white',
    padding: '15px 32px',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    fontSize: '16px',
    margin: '4px 2px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    transition: 'background-color 0.3s',
    borderRadius: '4px',
    boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
  };



  return (
    <button
      style={buttonStyle}
      onClick={onClick}
      disabled={disabled}
    >
      Renderizar Ropa
    </button>
  );
};

export default RenderButton;
