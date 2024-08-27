'use client';
import React from 'react';
import { MouseEventHandler } from "react";

export interface ButtonProps {
  type: "submit" | "button" | "reset",
  label: string;      
  onClick: MouseEventHandler<HTMLButtonElement>; 
  className?: string; 
}

const Button: React.FC<ButtonProps> = ({ label, onClick, className, type }) => {
  return (
    <button type={type} onClick={onClick} className={className}>
      {label}
    </button>
  );
};

export default Button;