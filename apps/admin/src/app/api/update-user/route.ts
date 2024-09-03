
import { NextResponse } from 'next/server';
import { User } from '@admin/app/interfaces/IUserLogged';
import axios from 'axios'

const apiJsonServerUrl = process.env.JSON_SERVER_API;

export async function POST(request: Request) {
    try {
        const { headers }: { headers: any } = await request;
        const { authorization }: { authorization: string } = await headers;
        console.log({ authorization });

        return NextResponse.json({
            headers
        }, { status: 201 });

    } catch (error) {
        console.error(error);
        return NextResponse.json({ error: 'Error creating user' }, { status: 500 });
    }
}

export async function GET(request: Request) {
    return NextResponse.json({ error: 'Esta ruta no está permitida' }, { status: 405 });
}