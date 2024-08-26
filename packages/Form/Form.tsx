import React, {ReactNode} from "react";

interface FormProps {
    onSubmit: (event: React.FormEvent<HTMLFormElement>) => void;
    className?: string,
    children: ReactNode // para renderizar componentes input y button.
}

const Form : React.FC<FormProps> = ({ onSubmit, className, children }) => {
    return(
        <form onSubmit={onSubmit} className={className}>
            {children}
        </form>
    )
}

export default Form;