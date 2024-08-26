import React, { ReactNode } from "react";

interface TableProps {
    children: ReactNode, // Tipo que renderiza cualquier cosa en React
    className?: string
}

const Table: React.FC<TableProps> = ({ children, className }) => {
    return (
    <table className={className}>
        {children}
    </table>
    );
}

export default Table;