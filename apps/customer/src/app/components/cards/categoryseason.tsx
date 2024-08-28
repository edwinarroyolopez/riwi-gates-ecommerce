import { FC } from 'react';
import Image from 'next/image';
import './styles/stylescategory.sass'

const Categoryseason: FC = () => {
    return (
        <div className='csBackground'>
            <div className='categoryseason'>
                <Image src="/camisas.jpg" alt="" />
                <Image src="/camisas.jpg" alt="" />
                <Image src="/camisas.jpg" alt="" />
                <Image src="/camisas.jpg" alt="" />
                <h1>Summer</h1>
                <h1>Street</h1>
                <h1>Casual</h1>
                <h1>Denim</h1>
            </div>
            <button>Button</button>
        </div>

    );
};

export default Categoryseason;