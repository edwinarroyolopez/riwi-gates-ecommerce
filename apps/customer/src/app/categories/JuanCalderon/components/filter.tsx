import React, { useState } from 'react';

interface FilterProps {
    categories: string[];
    onFilterChange: (filteredCategories: string[]) => void;
}

const Filter: React.FC<FilterProps> = ({categories, onFilterChange}) => {
    const [filterValue, setFilterValue] = useState('');

    const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFilterValue(event.target.value);
        // Perform filtering logic here
    };

    return (
        <div>
            <input type="text" value={filterValue} onChange={handleFilterChange} />
            {/* Render your filtered content here */}
        </div>
    );
};

export default Filter;