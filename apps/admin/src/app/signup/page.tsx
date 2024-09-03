'use client'

import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { signup, updateDataUser } from '../redux/slices/userLoggedSlice'

interface Form {
  name: string;
  email: string;
  password: string;
}
const initialForm: Form = {
  name: '',
  email: '',
  password: ''
}
const SignupPage: FC = () => {
  const [formData, setFormData] = useState<Form>(initialForm)
  const dispatch = useDispatch()

   // Selector para obtener productos desde el estado de Redux
  //  const userLogged = useSelector((state: RootState) => state.userLogged.user);
  //  const loading = useSelector((state: RootState) => state.userLogged.loading);
  //  const error = useSelector((state: RootState) => state.userLogged.error);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name }: { value: string, name: string } = e.target
    setFormData({ ...formData, [name]: value })
  }


  const handleClick = (): void => {
    dispatch(signup(formData))
  }

  const handleClickAuth = (): void => {
    dispatch(updateDataUser(formData))
  }

  return (
    <div style={{ margin: "auto", width: "200px" }}>
      <br />
      <h3>Registro</h3>
      <br />
      name: <input type="text" name={'name'} onChange={handleChange} /><br />
      email: <input type="text" name={'email'} onChange={handleChange} /><br />
      password: <input type="text" name={'password'} onChange={handleChange} /><br />
      <button onClick={handleClick}> Registrar</button>
      <br />
      <button onClick={handleClickAuth}> Ir a ruta autenticada</button>
    </div>
  );
};

export default SignupPage;