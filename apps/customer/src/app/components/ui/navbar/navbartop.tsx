import { FC } from 'react';
import './styles/navbarstyle.sass'
import Link from 'next/link';

const Navbartop: FC = () => {
  return (
      <nav>
        <Link href='/store'>Categoria 1</Link>
        <Link href='/store'>Categoria 2</Link>
        <Link href='/store'>Categoria 3</Link>
        <h1>LOGO</h1>
        <input type="text" placeholder='Find' />
        <button>Login</button>
        <h3>Cart</h3>
      </nav>
  );
};

export default Navbartop;