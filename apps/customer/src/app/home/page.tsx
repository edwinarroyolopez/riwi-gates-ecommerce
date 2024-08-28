import { FC } from 'react';
import Headertop from '../components/ui/Header/Headertop';
import Hero from '../components/ui/hero/hero';
import Categorymain from '../components/cards/categorymain';
import Categoryseason from '../components/cards/categoryseason';
import Footer from '../components/ui/footer/footerBottom';

const Category: FC = () => {
  return (
      <main>
        <Headertop/>
        <Hero/>
        <Categorymain/>
        <Categoryseason/>
        <Footer />
      </main>
  );
};

export default Category;