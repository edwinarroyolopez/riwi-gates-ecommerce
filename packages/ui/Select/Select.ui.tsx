import React from "react";

// interface para el componente select.

interface SelectProps {
    options: { label: string; value: string | number }[]; // opciones del select con su label y su valor.
    value?: string | number; // valor seleccionado.
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void; // useState.
    className?: string;
    disabled?: boolean; 
}

// componente select.

const Select : React.FC<SelectProps> = ({ options, value, onChange, className, disabled }) => {
    return (
        <select
          value={value}
          onChange={onChange}
          className={className}
          disabled={disabled}
        >
        {options.map((option, index) => (
            <option key={index} value={option.value}>
                {option.label}
            </option>
        ))}
        </select>
    );
}

export default Select;