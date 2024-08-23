import { FC } from 'react';
import Navbartop from '../components/ui/navbar/navbartop';
import Hero from '../components/ui/hero/hero';
import Categorymain from '../components/cards/categorymain';
import Categoryseason from '../components/cards/categoryseason';
import LookSection from '../components/LookSection/LookSection';
import Footer from '../components/ui/footer/footerBottom';
import "./styles/stylehome.sass"


const Category: FC = () => {
  return (
    <main className="category-container">
      <Navbartop />
      <div className="hero-wrapper">
      <Hero />
      </div>
      <div className='content-wrapper'>
        <Categorymain />
        <Categoryseason />
        <LookSection />
        <Footer />
      </div>
    </main>
  );
};

export default Category;