'use client'
import { FC } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const HomePage: FC = () => {
  const router = useRouter();

  const handleImageClick = (category: string) => {
    localStorage.setItem('category', category);
    router.push('/home');
  };

  return (
    <div className='centercontainer'>
      <h2>GATES STORE</h2>
      <div onClick={() => handleImageClick('women')}>
        <Image src="/women.jpg" width={450} height={600} alt="Women's Fashion" />
      </div>
      <div onClick={() => handleImageClick('men')}>
        <Image src="/men.jpeg" width={450} height={600} alt="Men's Fashion" />
      </div>
      <div onClick={() => handleImageClick('teen')}>
        <Image src="/teen.jpg" width={450} height={600} alt="Teen's Fashion" />
      </div>
      <li><a href="/categories">categorias</a></li>
    </div>
  );
};

export default HomePage;