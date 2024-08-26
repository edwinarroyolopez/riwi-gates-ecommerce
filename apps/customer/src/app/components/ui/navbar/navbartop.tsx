'use client'

import React, { useState, useRef } from 'react';
import './styles/navbarstyle.sass'
import Link from 'next/link';
import Navsubcategories from './navsubcategories';

const Navbartop: React.FC = () => {
  const [showSubcategories, setShowSubcategories] = useState(false);
  const [activeCategory, setActiveCategory] = useState('');
  const navRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = (category: string) => {
    setShowSubcategories(true);
    setActiveCategory(category);
  };

  const handleMouseLeave = (event: React.MouseEvent) => {
    const relatedTarget = event.relatedTarget as Node | null;
    if (relatedTarget instanceof Node && navRef.current) {
      if (!navRef.current.contains(relatedTarget)) {
        setShowSubcategories(false);
        setActiveCategory('');
      }
    } else {
      setShowSubcategories(false);
      setActiveCategory('');
    }
  };

  return (
    <div className="nav-container" ref={navRef} onMouseLeave={handleMouseLeave}>
      <nav>
        <Link href='/men' onMouseEnter={() => handleMouseEnter('men')}>Men</Link>
        <Link href='/women' onMouseEnter={() => handleMouseEnter('women')}>Women</Link>
        <Link href='/kids' onMouseEnter={() => handleMouseEnter('kids')}>Kids</Link>
        <h1>LOGO</h1>
        <input type="text" placeholder='Find' />
        <button>Login</button>
        <h3>Cart</h3>
      </nav>
      {showSubcategories && <Navsubcategories category={activeCategory} />}
    </div>
  );
};

export default Navbartop;