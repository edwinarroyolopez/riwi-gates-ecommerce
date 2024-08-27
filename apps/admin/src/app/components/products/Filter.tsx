import React, { useState } from "react";
import { FilterProps } from "../../interfaces/Iecommerce";

const Filter: React.FC<FilterProps> = ({ onFilter }) => {
  const [query, setQuery] = useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    onFilter(value);
  };

  return (
    <div>
      <input 
        type="text" 
        value={query} 
        onChange={handleInputChange} 
        placeholder="Filter products..." 
      />
    </div>
  );
};

export default Filter;
