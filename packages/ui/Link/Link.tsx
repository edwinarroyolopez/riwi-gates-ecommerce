import React from 'react'
import Link from 'next/link';
import styled from "styled-components"

interface LinkProps {
  href: string;
  label: string;
  target?: string;
}

const LinkComponent =styled(Link)`
  text-decoration:none;
  padding: 2px;
  font-weight: bolder;
  color: ${({ theme }) => theme.pageColors.textTertiary};

  &:hover, :focus{
    color: ${({ theme }) => theme.pageColors.bgQuinary};
  }
`

const StyledLink: React.FC<LinkProps> = ({ href, label }) => {
  return <LinkComponent href={href}>{label}</LinkComponent>;
};

export default StyledLink
