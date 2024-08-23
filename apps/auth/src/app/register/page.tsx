"use client"

import styles from './page.module.css'
import { useEffect, useState } from "react";
import { IUser } from "./types";
import { isValidPassword } from './utils';
import { UserService } from '@/services/userService';

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
  
  const [usersData,setUsersData]=useState<any>();
  const [user, setUser] = useState<IUser>(initialState);
  const [confirmEmail,setConfirmEmail] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');

  useEffect(() => {
    (async () => {
      const apiResponse=await UserService.getUsers();
      setUsersData(apiResponse);
    })();
  },[]);

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

  function handleSubmit(e: React.FormEvent) {
    try {
      e.preventDefault();
      // let userExist=false;
      // usersData.forEach(userArray => {
      //   if(userArray.email===user.email){
      //     userExist=true;
      //   }
      // });
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
    } catch (error) {
      alert(error);
    }
  }

  return (
    <main>
      <h1>Register</h1>
      <form className={styles.registerForm} onSubmit={handleSubmit}>
        <input required id="firstName" onChange={handleName} type="text" placeholder="First Name" />
        <input required id="lastName" onChange={handleName} type="text" placeholder="Last Name" />
        <small>{user.email!==confirmEmail?'El correo electrónico debe coincidir':''}</small>
        <input required id="email" type="email" placeholder="Email" onChange={handleOthers}/>
        <input required id="confirm-email" type="email" placeholder="Confirm Email" onChange={handleConfirmEmail}/>
        <input id="phone" type="number" placeholder="Cellphone" onChange={handleOthers}/>
        <input required id="address" onChange={handleOthers} type="text" placeholder="Address" />
        <small>{!isValidPassword(user.password)?'La contraseña debe incluir 12 caracteres, 1 número, 1 letra mayuscula y 1 caractér especial':''}</small>
        <small>{user.password!==confirmPassword?'Las contraseñas deben coincidir':''}</small>
        <input required id="password" type="password" placeholder="Password" onChange={handleOthers}/>
        <input required id="confirm-password" type="password" placeholder="Confirm Password" onChange={handleConfirmPassword}/>
        <button type="submit">Enviar</button>
        <button type='button' onClick={()=>console.log(usersData)}>Data</button>
      </form>
    </main>
  );
}