import React from 'react';

// Interface para el componente Select
interface SelectProps {
    options: { label: string; value: string | number }[]; // Opciones del select con su label y su valor.
    value?: string | number; // Valor seleccionado.
    onChange?: (event: React.ChangeEvent<HTMLSelectElement>) => void; // Función para manejar el cambio.
    className?: string;
    disabled?: boolean;
    label?: string; // Prop para la etiqueta accesible.
}

// Componente Select
const Select: React.FC<SelectProps> = ({ options, value, onChange, className, disabled, label }) => {
    return (
        <div>
            {label && (
                <label htmlFor={value as string} className="sr-only">
                    {label}
                </label>
            )}
            <select
                id={value as string}
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
        </div>
    );
};

export default Select;
