'use client';
import styled from "styled-components";
import React from "react";
import StyledLink from "../ui/Link/Link";
import toggleIconDark from 'packages/public/assets/img/dark.png';
import toggleIconLight from 'packages/public/assets/img/light.png';
import Image from 'next/image';
import ButtonTheme from "../ui/ButtonTheme/ButtonTheme.ui";
import { Julius_Sans_One } from 'next/font/google';
import { Plaster } from 'next/font/google';
import { getPageTheme } from "packages/utils/page-theme.utility";

// Fonts
const JuliusFont = Julius_Sans_One({
  subsets: ['latin'],
  weight: '400',
});

const PlasterFont = Plaster({
  subsets: ['latin'],
  weight: '400',
});

// Styled components
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 50px;
  padding:10px 20px;
  border-bottom:dashed 1px ${({ theme }) => theme.pageColors.textTertiary};;
  background-color:${({ theme }) => theme.pageColors.bgPrimary};;
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 33%;
  cursor: pointer;

    * {
      font-family: ${PlasterFont.style.fontFamily};
      font-style: normal;
      font-size: 30px;
  }
`;

const ToggleIconContainer = styled.div`
  width: 33%;
  cursor: pointer;
  display: flex;
  justify-content: end;
  align-items: center;
`;

const NavList = styled.ul`
  width: 33%;
  list-style: none;
  text-align: center;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 50px;

`;

const NavItem = styled.li`
  margin: 0;
  padding: 0;
  display: inline;
  font-size: 16px;
  cursor: pointer;

  &:hover{
    font-size: 17px;
    color: ${({ theme }) => theme.pageColors.bgQuinary};
    border-bottom: 2px solid ${({ theme }) => theme.pageColors.bgQuinary};
  }
`;

// Header component
export const Header: React.FC<{ onToggleTheme: () => void }> = ({ onToggleTheme }) => {
  function ToggleTheme() {
    // Here, we make sure that the localStorage is available
    if (typeof window !== 'undefined' && window.localStorage) {
      const currentTheme = localStorage.getItem('theme');
      if (currentTheme === 'light') {
        return (
          <ButtonTheme type="button" icon={
            <Image src={toggleIconDark} alt="Toggle theme" style={{ width: 20, height: 20 }} />
          } onClick={onToggleTheme} />
        )
      } else {
        return (
          <ButtonTheme type="button" icon={
            <Image src={toggleIconLight} alt="Toggle theme" style={{ width: 20, height: 20 }} />
          } onClick={onToggleTheme} />
        )
      }
    }

    // Default 'returned value' if localStorage is not available
    return (
      <ButtonTheme type="button" icon={
        <Image src={toggleIconDark} alt="Toggle theme" style={{ width: 20, height: 20 }} />
      } onClick={onToggleTheme} />
    );
  }

  return (
    <HeaderContainer>
      <NavList>
        <NavItem>
          <StyledLink href="/hombre" label="Hombre" />
        </NavItem>
        <NavItem>
          <StyledLink href="/mujer" label="Mujer" />
        </NavItem>
        <NavItem>
          <StyledLink href="/ninos" label="Niños" />
        </NavItem>
      </NavList>
      <LogoContainer>
        <StyledLink href="/" label="GATES" />
      </LogoContainer>
      <ToggleIconContainer>
        {ToggleTheme()}
      </ToggleIconContainer>
    </HeaderContainer>
  );
};
