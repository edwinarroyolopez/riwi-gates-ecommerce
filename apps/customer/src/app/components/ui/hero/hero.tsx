import { FC } from 'react';
import Image from 'next/image';

const Hero: FC = () => {
    return (
        <div className='hero'>
            <Image src="/hero.jpg" width={0}
                height={0}
                sizes="100vw"
                style={{ width: '100%', height: 'auto' }} alt="Picture" />
        </div>
    );
};

export default Hero;