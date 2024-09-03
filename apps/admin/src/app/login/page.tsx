'use client'

import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { login } from '../redux/slices/userLoggedSlice'
import { UserLogged } from '../interfaces/IUserLogged'

interface Form {
  email: string;
  password: string;
}
const initialForm: Form = {
  email: '',
  password: ''
}
const LoginPage: FC = () => {
  const [formData, setFormData] = useState<Form>(initialForm)
  const dispatch = useDispatch()

   // Selector para obtener productos desde el estado de Redux
   const userLogged = useSelector((state: RootState) => state.userLogged.user);
   const loading = useSelector((state: RootState) => state.userLogged.loading);
   const error = useSelector((state: RootState) => state.userLogged.error);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name }: { value: string, name: string } = e.target
    setFormData({ ...formData, [name]: value })
  }


  const handleClick = (): void => {
    console.log({ formData })
    dispatch(login(formData))
    console.log({ userLogged })
  }

  return (
    <div style={{ margin: "auto", width: "200px" }}>
      <br />
      <h3>Login</h3>
      <br />
      email: <input type="text" name={'email'} onChange={handleChange} /><br />
      password: <input type="text" name={'password'} onChange={handleChange} /><br />
      <button onClick={handleClick}> Iniciar session</button>
    </div>
  );
};

export default LoginPage;