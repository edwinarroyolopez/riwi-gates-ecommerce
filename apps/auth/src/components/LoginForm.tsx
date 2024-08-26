"use client";

import { useState } from 'react';
import { authenticateUser } from '../controllers/login.controllers';
import { useRouter } from 'next/navigation';
import styles from '../app/page.module.css';

const LoginForm = () => {
  const [Email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter(); // Hook para la redirección

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);

    try {
      const user = await authenticateUser(Email, password);
if (user) {
  if (user.roles[0].name === "user") {
    // Redirige al administrador a una página diferente
    router.push('user-page');
  
  } 
  if (user.roles[0].name === "superAdmin"){
    router.push('superadmi-page');
  }
  if (user.roles[0].name === "admin"){
    router.push('admi-page');
  }
  else {
    // Redirige al usuario normal
    console.log("dont login")
  }
} 
else {
  // Maneja error de autenticación
  setError('Invalid username or password');
}
    } catch (err) {
      console.error('Login error:', err);
      setError('An error occurred during login');
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.loginForm}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={Email}
          onChange={(e) => setUsername(e.target.value)}
          required
          aria-required="true"
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          aria-required="true"
        />
      </div>
      {error && <p className={styles.error}>{error}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
