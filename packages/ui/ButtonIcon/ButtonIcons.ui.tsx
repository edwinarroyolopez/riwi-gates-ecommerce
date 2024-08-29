import React from 'react';
import styled from 'styled-components';
import { getPageTheme } from 'packages/utils/page-theme.utility';

interface ButtonIconsProps {
  type: "button";
  icon: React.JSX.Element;
  target?: string;
  href?: string;
  onClick?: () => void;
  btnColor: ({ theme }: { theme: any }) => string;
}

const ButtonIconStyle = styled.a<{ btnColor: ({ theme }: { theme: any }) => string }>`
  display: inline-flex;
  width: 45px;
  height: 45px;
  border: black 1px solid;
  cursor: pointer;
  border-radius: 100%;
  background-color: ${({ theme, btnColor }) => btnColor({ theme })};
  align-items: center;
  justify-content: center;
  text-decoration: none;

  &:hover {
    opacity: 0.8;
    transition: background-color 0.3s ease-in-out;
  }
`;

const ButtonIcon: React.FC<ButtonIconsProps & { href: string, target?: string, onClick?: () => void }> = ({ btnColor, type, icon, href, target = '_self', onClick }) => {
  const currentTheme = getPageTheme();

  return (
    <ButtonIconStyle
      href={href}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
      onClick={onClick}
      btnColor={btnColor}
    >
      {icon}
    </ButtonIconStyle>
  );
};

export default ButtonIcon;
