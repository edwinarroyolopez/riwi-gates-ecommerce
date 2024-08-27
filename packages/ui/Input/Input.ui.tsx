import React from "react";

//Creación de la interface del elemento input
interface InputProps {
    type: string;
    placeholder: string;
    value?: string | number;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    className?: string;
    disabled?: boolean; //Input activo en 'TRUE' o desactivado en 'FALSE'
    ariaLabel: string; //Atributo para accesibilidad web
}


const Input: React.FC<InputProps> = ( { type, placeholder, value, onChange, className, disabled, ariaLabel }) =>{
    return (
        <input
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={className}
          disabled={disabled}
          aria-label={ariaLabel}
        />
      );
}

export default Input;




