"use client"

import styles from './page.module.css'
import { useState } from "react";
import { IUser } from "./types";
import { isValidPassword } from './utils';

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
  const [confirmPassword,setConfirmPassword] = useState("");

  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    setUser(prevUser => ({
      ...prevUser,
      name: {
        ...prevUser.name,
        [e.target.id]: e.target.value
      }
    }));
  }

  function handleConfirmPassword(e: React.ChangeEvent<HTMLInputElement>){
    setConfirmPassword(e.target.value)
  }

  function handleOthers(e:React.ChangeEvent<HTMLInputElement>){
    setUser(prevUser => ({
      ...prevUser,
      [e.target.id]: e.target.value
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    try {
      e.preventDefault();
      if(user.password !== confirmPassword){
        throw new Error("Las contraseñas no coinciden");
      }
      if(!isValidPassword(user.password)){
        throw new Error("La contraseña debe tener al menos 12 caracteres, 1 número, 1 letra mayúscula y 1 carácter especial");
      }
      console.log(user);
    } catch (error) {
      alert(error);
    }
  }

  return (
    <main>
      <h1>Registro</h1>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <label htmlFor="firstName">Nombre</label>
        <input required id="firstName" onChange={handleName} type="text" placeholder="Nombre" />
        <label htmlFor="lastName">Apellidos</label>
        <input required id="lastName" onChange={handleName} type="text" placeholder="Apellidos" />
        <label htmlFor="email">Correo Electrónico</label>
        <input required id="email" type="email" placeholder="Correo Electrónico" onChange={handleOthers}/>
        <label htmlFor="phone">Celular</label>
        <input id="phone" type="number" placeholder="Celular" onChange={handleOthers}/>
        <label htmlFor="password">Password</label>
        <small>(Min 12 caracteres. Incluye 1 número, 1 letra mayuscula y 1 caractér especial)</small>
        <input required id="password" type="password" placeholder="Password" onChange={handleOthers}/>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input required id="confirm-password" type="password" placeholder="Password" onChange={handleConfirmPassword}/>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}