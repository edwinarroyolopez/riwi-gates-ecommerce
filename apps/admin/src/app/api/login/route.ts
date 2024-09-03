
import { NextResponse } from 'next/server';
import { generateToken } from '@admin/utils/session';

const apiJsonServerUrl = process.env.JSON_SERVER_API;

interface User {
    id?: string;
    name: string;
    email: string;
    password?: string;
    // otros campos
}

export async function POST(request: Request) {

    try {
        const {
            email,
            password
        }: User = await request.json();

        console.log(' login backend');

        const response = await fetch(`${apiJsonServerUrl}/usersDB`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })

        const users = await response.json()

        console.log({ users });

        const userFound = await users.find((u: User) => u.email === email && u.password === password)

        console.log({
            userFound
        })

        if (userFound) {
            delete userFound.password;
            const token = generateToken({
                ...userFound,
                password
            })

            return NextResponse.json({
               ...userFound,
                token
            }, { status: 201 });

        } else {
            throw  "Error login user"
        }

    } catch (error) {
        return NextResponse.json({ error: 'User or password incorrect' }, { status: 401 });
    }
}

export async function GET(request: Request) {

    try {

    } catch (error) {
        return NextResponse.json({ error: 'Error creating post' }, { status: 500 });
    }
}