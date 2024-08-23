'use client'
import { FC } from 'react';
import Image from 'next/image';

const HomePage: FC = () => {
  return (
      <div className='centercontainer'>
        <h2>GATES STORE</h2>
        
          <Image src="/women.jpg" width={450} height={600} alt="Picture"/>
          <Image src="/men.jpeg" width={450} height={600} alt="Picture"/>
          <Image src="/teen.jpg" width={450} height={600} alt="Picture"/>
        
      </div>
  );
};

export default HomePage;
