import { FormEvent, RefObject } from 'react';
import emailjs from '@emailjs/browser';

export const sendEmail = (
    e: FormEvent<HTMLFormElement>,
    formRef: RefObject<HTMLFormElement>,
    token: string
): void => {
    e.preventDefault();

    if (formRef.current) {
        const hiddenTokenInput = formRef.current.querySelector('input[name="token"]') as HTMLInputElement;
        hiddenTokenInput.value = `http://localhost:3000/verify-email?token=${token}`;

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