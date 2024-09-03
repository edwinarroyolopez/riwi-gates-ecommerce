
import { NextResponse } from 'next/server';

export async function POST(request: Request) {

    try {
        const response = 'Hola!! from backend';
        return NextResponse.json({ response }, { status: 201 });

    } catch (error) {
        return NextResponse.json({ error: 'User or password incorrect' }, { status: 401 });
    }
}

export async function GET(request: Request) {
    return NextResponse.json({ message: 'Hello from test route!' }, { status: 500 });
}