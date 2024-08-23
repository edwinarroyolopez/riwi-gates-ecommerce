"use client"

import styles from './page.module.css'
import { FormEvent, useRef, useState } from "react";
import { IUser } from "./types";
import { isValidPassword } from './utils';
import { sendEmail } from '@/utils/sendEmail';

const initialState:IUser={
  name: {
    firstName: "",
    lastName: "",
  },
  email: "",
  password: "",
  address: "",
  phone: "",
}

export default function Register() {
  
  const [user, setUser] = useState<IUser>(initialState);
  const [confirmEmail,setConfirmEmail] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');

  const formRef = useRef<HTMLFormElement>(null);

  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    setUser(prevUser => ({
      ...prevUser,
      name: {
        ...prevUser.name,
        [e.target.id]: e.target.value
      }
    }));
  }

  function handleConfirmEmail(e: React.ChangeEvent<HTMLInputElement>){
    setConfirmEmail(e.target.value);
  }

  function handleConfirmPassword(e: React.ChangeEvent<HTMLInputElement>){
    setConfirmPassword(e.target.value);
  }

  function handleOthers(e:React.ChangeEvent<HTMLInputElement>){
    setUser(prevUser => ({
      ...prevUser,
      [e.target.id]: e.target.value
    }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    
    try {
      e.preventDefault();
      if(!user.name.firstName || !user.name.lastName || !user.email || !user.phone || !user.address || !user.password){
        throw new Error("Todos los campos son obligatorios");
      }
      if(user.email!==confirmEmail){
        throw new Error("Los correos electrónicos no coinciden");
      }
      if(user.password!==confirmPassword){
        throw new Error("Las contraseñas no coinciden");
      }
      if(!isValidPassword(user.password)){
        throw new Error("La contraseña debe tener al menos 12 caracteres, 1 número, 1 letra mayúscula y 1 carácter especial");
      }
      console.log(user);
      sendEmail(e,formRef);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <main>
      <h1>Register</h1>
      <form className={styles.registerForm} ref={formRef} onSubmit={handleSubmit}>
        <input required id="firstName" onChange={handleName} type="text" placeholder="First Name" name='to_name'/>
        <input required id="lastName" onChange={handleName} type="text" placeholder="Last Name" />
        <small>{user.email!==confirmEmail?'El correo electrónico debe coincidir':''}</small>
        <input required id="email" type="email" placeholder="Email" onChange={handleOthers} name="to_email"/>
        <input required id="confirm-email" type="email" placeholder="Confirm Email" onChange={handleConfirmEmail}/>
        <input id="phone" type="number" placeholder="Cellphone" onChange={handleOthers}/>
        <input required id="address" onChange={handleOthers} type="text" placeholder="Address" />
        <small>{!isValidPassword(user.password)?'La contraseña debe incluir 12 caracteres, 1 número, 1 letra mayuscula y 1 caractér especial':''}</small>
        <small>{user.password!==confirmPassword?'Las contraseñas deben coincidir':''}</small>
        <input required id="password" type="password" placeholder="Password" onChange={handleOthers}/>
        <input required id="confirm-password" type="password" placeholder="Confirm Password" onChange={handleConfirmPassword}/>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}