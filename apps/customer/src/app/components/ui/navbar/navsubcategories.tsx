'use client'

import React from 'react';
import Link from 'next/link';

interface NavsubcategoriesProps {
  category: string;
}

const subcategories = {
  men: ['jeans', 'shirts'],
  women: ['jeans', 'shirts', 'clothes'],
  kids: ['jeans', 'shirts']
};

const Navsubcategories: React.FC<NavsubcategoriesProps> = ({ category }) => {
  const currentSubcategories = subcategories[category as keyof typeof subcategories] || [];

  return (
    <div className="subcategories-container">
      {currentSubcategories.map((subcategory, index) => (
        <Link key={index} href={`/${category}/${subcategory}`}>
          {subcategory.charAt(0).toUpperCase() + subcategory.slice(1)}
        </Link>
      ))}
    </div>
  );
};

export default Navsubcategories;