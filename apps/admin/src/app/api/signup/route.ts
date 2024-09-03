
import { NextResponse } from 'next/server';
import { User } from '@admin/app/interfaces/IUserLogged';
import { generateToken } from '@admin/utils/session';
import axios from 'axios'

const apiJsonServerUrl = process.env.JSON_SERVER_API;

export async function POST(request: Request) {
    try {
        const user: User = await request.json();

        const {
            name,
            email,
            password
        } = user;

        const token = generateToken({
            name,
            email,
            password
        })

        const response = await axios.post(`${apiJsonServerUrl}/usersDB`, user)
        const userInserted = response.data;

        delete userInserted.password;

        console.log(userInserted);

        return NextResponse.json({
            user: userInserted,
            token
        }, { status: 201 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
    }
}

export async function GET(request: Request) {
    return NextResponse.json({ error: 'Esta ruta no está permitida' }, { status: 405 });
}