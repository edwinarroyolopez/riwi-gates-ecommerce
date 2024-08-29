import React from 'react';
import styled from 'styled-components';
import { getPageTheme } from '../../utils/page-theme.utility';

interface ButtonToggleProps {
  type: "button";
  icon: React.JSX.Element;
  onClick?: () => void;
}

// Styled button component with dynamic background color based on the theme
const ButtonThemeStyle = styled.button`
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 100%;
  border: ${({ theme }) => theme.pageColors.textTertiary} 1px solid;
  background-color: transparent;

  &:hover {
    opacity: 0.8;
    transition: 0.3s ease;
  }
`;

// ButtonTheme component
const ButtonTheme: React.FC<ButtonToggleProps & { onClick: () => void }> = ({ type, icon, onClick }) => {
  // Get the current theme to determine the button color
  const currentTheme = getPageTheme();

  return (
    <ButtonThemeStyle 
      type={type} 
      onClick={onClick} 
    >
      {icon}
    </ButtonThemeStyle>
  );
};

export default ButtonTheme;
