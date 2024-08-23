import { FormEvent, RefObject } from 'react';
import emailjs from '@emailjs/browser';

export const sendEmail = (
    e: FormEvent<HTMLFormElement>,
    formRef: RefObject<HTMLFormElement>
): void => {
    e.preventDefault();

    if (formRef.current) {
        emailjs.sendForm('service_ng578mi', 'template_ltv2rqu', formRef.current, 'u4XjTDKRIQ1ktfRyU')
            .then(
                () => {
                    console.log('¡ÉXITO!');
                },
                (error) => {
                    console.log('FALLÓ...', error.text);
                }
            );
    }
};