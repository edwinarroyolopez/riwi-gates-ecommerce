import { v4 as uuidv4 } from 'uuid';

export const generateVerificationToken = async (email: string) => {
    // generate a random token
    const token = uuidv4();
    const expires = new Date().getTime() + 1000 * 60 * 60 * 24 // 24 hours

    const data = {
        email: email,
        token: token,
        expires: expires
    }

    return data;
}