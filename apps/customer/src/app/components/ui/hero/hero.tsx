'use client'
import { FC, useState, useEffect } from 'react';
import Image from 'next/image';
import "./style/stylehero.sass"

const images = ['/hero1.png', '/hero2.png', '/hero3.png'];

const Hero: FC = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
            setProgress(0);
        }, 5000);

        const progressInterval = setInterval(() => {
            setProgress((prevProgress) => Math.min(prevProgress + 1, 100));
        }, 50);

        return () => {
            clearInterval(interval);
            clearInterval(progressInterval);
        };
    }, []);

    return (
        <div className='hero'>
            {images.map((src, index) => (
                <div 
                    key={src} 
                    className={`slide ${index === currentImageIndex ? 'active' : ''}`}
                >
                    <Image
                        src={src}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: 'auto' }}
                        alt={`Slide ${index + 1}`}
                        priority={index === 0}
                    />
                </div>
            ))}
            <div className="progress-bar-container">
                <div 
                    className="progress-bar"
                    style={{ width: `${progress}%` }}
                ></div>
            </div>
        </div>
    );
};

export default Hero;