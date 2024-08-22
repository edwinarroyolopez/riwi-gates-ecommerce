'use client'
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const HomePage: FC = () => {
  return (
      <div className='centercontainer'>
        <h2>GATES STORE</h2>
          <Link href="/home"> <Image src="/women.jpg" width={450} height={600} alt="Picture"/></Link>
         
          <Link href="/home"><Image src="/men.jpeg" width={450} height={600} alt="Picture"/></Link>
          <Link href="/home"><Image src="/teen.jpg" width={450} height={600} alt="Picture"/></Link>
        
          <li><a href="/categories">categorias</a></li>
      </div>
  );
};

export default HomePage;
