'use client'
import { FC, useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const initialState: string[] = []

const HomePage: FC = () => {
  const router = useRouter();
  const [categories, setCategories] = useState<string[]>(initialState)
  const [open, setOpen] = useState<Boolean>(false)

  useEffect(() => {
    console.log('useEffect - linkeado a categories')
    if (categories.length === 0) {
      setTimeout(() => {
        // setCategories(['women', 'men', 'kids'])
      }, 10000)
    }
  }, [categories])

  useEffect(() => {
    console.log('useEffect - linkeado a open', open)
  }, [open])

  const handleImageClick = (category: string) => {
    localStorage.setItem('category', category);
    router.push('/home');
  };


  const handleOpenModal = () => {
    console.log('handleOpenModal')
    setOpen(true)
  }

  const handleClose = () => {
    console.log('handleClose')
    setOpen(false)
  }

  const handleSubmit = () => {
    console.log('handleSubmit')
    setOpen(false)
    // aqui hay algo
  }

  return (
    <div className='centercontainer'>
      <h2>GATES STORE</h2>

      {categories.length > 0 ?
        categories.map((category: string) => {
          return (
            <div key={`${category}`} onClick={() => handleImageClick(category)}>
              <Image src={`/${category}.jpg`} width={450} height={600} alt={`${category}'S Fashion`} />
            </div>
          )
        })
        : <div> Loading categories!</div>
      }
      <li><a href="/categories">categorias</a></li>
      
      <button onClick={handleOpenModal} >Abrir modal</button>

      <hr />
      {open ? (
        <div className='modal'>
          Esto es un modal
          <button onClick={handleClose} >Cerrar</button>
          <button onClick={handleSubmit} >Enviar</button>
        </div>
      ) : null}
      <hr />
    </div>
  );
};

export default HomePage;
