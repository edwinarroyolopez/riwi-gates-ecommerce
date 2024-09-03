import jwt from 'jsonwebtoken';
import { User } from '../app/interfaces/IUserLogged'

const SECRET_KEY: string = process.env.SECRET_KEY || '';

export const generateToken = (user: User): string => {
    const token = jwt.sign(user, SECRET_KEY, { expiresIn: '10h' })
    console.log({ token })
    return token;
}

export const setSession = ({ token, user }: { token: string, user: User }): void => {
    console.log({ title: 'setSession', user, token })
    localStorage.setItem('token', token);
    localStorage.setItem('user', JSON.stringify(user));
}

export const getToken = () => {
    return localStorage.getItem('token') || '';
}