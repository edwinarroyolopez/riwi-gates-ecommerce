import { FC } from 'react';
import Image from 'next/image';
import './styles/stylescategory.sass'

const Categorymain: FC = () => {
    return (
        <div className='categoryMain'>
            <Image src="/camisas.jpg" alt="" />
            <Image src="/camisas.jpg" alt="" />
            <Image src="/camisas.jpg" alt="" />
            <Image src="/camisas.jpg" alt="" />
            <Image src="/camisas.jpg" alt="" />
            <h1>Categoria 1</h1>
            <h1>Categoria 2</h1>
            <h1>Categoria 3</h1>
            <h1>Categoria 4</h1>
            <h1>Categoria 5</h1>
        </div>
    );
};

export default Categorymain;