"use client"

import styles from './page.module.css'
import { useEffect, useState } from "react";
import { IUser } from '../register/types';
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

const api = new UserService();

export default function Profile() {
  const [user, setUser] = useState<IUser>(initialState);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUser() {
      try {
        const userId = "2643"; // ID del usuario que deseas consultar
        const response = await api.getUserById(userId);

        if ('status' in response && response.status === 200) {
          if ('user' in response && response.user && typeof response.user === 'object') {
            setUser(response.user as IUser); // Aseguramos que el usuario es del tipo IUser
          } else {
            setErrorMessage("Invalid user data received.");
          }
        } else if ('message' in response) {
          setErrorMessage(response.message);
        } else {
          setErrorMessage("Unexpected error occurred.");
        }
      } catch (error) {
        setErrorMessage("Failed to fetch user data.");
      }
    }

    fetchUser();
  }, []);

  function handleName(e: React.ChangeEvent<HTMLInputElement>) {
    setUser(prevUser => ({
      ...prevUser,
      name: {
        ...prevUser.name,
        [e.target.id]: e.target.value
      }
    }));
  }

  function handleOthers(e: React.ChangeEvent<HTMLInputElement>) {
    setUser(prevUser => ({
      ...prevUser,
      [e.target.id]: e.target.value
    }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      const userId = "2643"; // ID del usuario que deseas actualizar
      const response = await api.updateUser(userId, user);
      if (response.status === 200) {
        setSuccessMessage(response.message);
      } else {
        setErrorMessage(response.message);
      }
    } catch (error) {
      setErrorMessage("Failed to update user data.");
    }
  }

  return (
    <main>
      <h1>Profile</h1>
      {errorMessage && <p className={styles.error}>{errorMessage}</p>}
      {successMessage && <p className={styles.success}>{successMessage}</p>}
      <form className={styles.profileForm} onSubmit={handleSubmit}>
        <p>{user.email}</p>

        <label htmlFor="firstName">First Name</label>
        <input required id="firstName" onChange={handleName} value={user.name.firstName} type="text" placeholder="First Name" />

        <label htmlFor="lastName">Last Name</label>
        <input required id="lastName" onChange={handleName} value={user.name.lastName} type="text" placeholder="Last Name" />

        <label htmlFor="phone">Cellphone</label>
        <input required id="phone" type="number" placeholder="Cellphone" value={user.phone} onChange={handleOthers} />

        <label htmlFor="address">Address</label>
        <input required id="address" onChange={handleOthers} value={user.address} type="text" placeholder="Address" />

        <button type="submit">Save Profile</button>
      </form>
    </main>
  );
}
