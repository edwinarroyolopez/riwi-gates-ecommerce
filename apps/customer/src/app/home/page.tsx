import { FC } from 'react';
import Navbartop from '../components/ui/navbar/navbartop';
import Hero from '../components/ui/hero/hero';
import Categorymain from '../components/cards/categorymain';
import Categoryseason from '../components/cards/categoryseason';
import LookSection from '../components/LookSection/LookSection';
import styles from '../components/LookSection/styles/LookSection.module.scss'
import Footer from '../components/ui/footer/footerBottom';


const Category: FC = () => {
  return (
      <main>
        <Navbartop/>
        <Hero/>
        <Categorymain/>
        <Categoryseason/>
        <LookSection />
        <Footer />
      </main>
  );
};

export default Category;