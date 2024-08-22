"use client"

import styles from './page.module.css'
import { useState } from "react";
import { DocumentTypes, IUser } from "./types";

const initialState:IUser={
  name: {
    firstName: "",
    lastName: "",
  },
  birthday: "",
  email: "",
  password: "",
  ubication: {
    country: "",
    state: "",
    city: "",
    zipCode: "",
    address: "",
  },
  phone: "",
  document: {
    documentType: "CC",
    documentNumber: "",
  },
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

  function handleDocument(e: React.ChangeEvent<HTMLSelectElement|HTMLInputElement>) {
    setUser(prevDocument => ({
      ...prevDocument,
      document: {
        ...prevDocument.document,
        [e.target.id]: e.target.value
      }
    }));
  }

  function handleUbication(e: React.ChangeEvent<HTMLSelectElement>){

  }

  function handleOthers(e:React.ChangeEvent<HTMLInputElement>){
    setUser(prevUser => ({
      ...prevUser,
      [e.target.id]: e.target.value
    }));
  }

  function handleSubmit(e: React.FormEvent) {
    try {
      if(user.password !== confirmPassword){
        throw new Error("Las contraseñas no coinciden");
      }
    } catch (error) {
      alert(error);
    }
    e.preventDefault();
    console.log(user);
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
        <label htmlFor="birthday">Fecha de nacimiento</label>
        <input required title="birthday" id="birthday" type="date" onChange={handleOthers}/>
        <label htmlFor="password">Password</label>
        <small>(min 12 caracteres, incluye 1 número, 1 letra mayuscula y 1 caractér especial)</small>
        <input required id="password" type="password" placeholder="Password" onChange={handleOthers}/>
        <label htmlFor="confirm-password">Confirm Password</label>
        <input required id="confirm-password" type="password" placeholder="Password" onChange={handleConfirmPassword}/>
        <label htmlFor="documentType">Tipo de Documento</label>
        <select required title="Tipo de Documento" id="documentType" onChange={handleDocument}>
          <option defaultChecked value="CC">{DocumentTypes.CC}</option>
          <option value="CE">{DocumentTypes.CE}</option>
          <option value="NIT">{DocumentTypes.NIT}</option>
          <option value="PP">{DocumentTypes.PP}</option>
        </select>
        <label htmlFor="documentNumber">Número de documento</label>
        <input required id="documentNumber" type="text" placeholder="Número de documento" onChange={handleDocument}/>
        <button type="submit">Enviar</button>
      </form>
    </main>
  );
}