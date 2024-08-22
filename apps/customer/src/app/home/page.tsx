import { FC } from 'react';
import Navbartop from '../components/ui/navbar/navbartop';
import Hero from '../components/ui/hero/hero';
import Categorymain from '../components/cards/categorymain';
import Categoryseason from '../components/cards/categoryseason';

const Category: FC = () => {
  return (
      <main>
        <Navbartop/>
        <Hero/>
        <Categorymain/>
        <Categoryseason/>
      </main>
  );
};

export default Category;