"use client"
import React from "react";

interface THeadProps {
    columns: string[];
}

const THead: React.FC<THeadProps> = ({ columns }) => {
    return (
        <thead>
            <tr>
                {columns.map((column, index) => (
                    <th key={index}>{column}</th>
                ))}
            </tr>
        </thead>
    );
}

export default THead;