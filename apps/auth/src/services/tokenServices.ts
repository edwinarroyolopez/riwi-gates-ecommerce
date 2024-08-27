import { IToken } from "@/models/IToken";

export const postToken = async (token: IToken, url: string) => {
    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'Application/json'
        },
        body: JSON.stringify(token)
    })

    if (!response.ok) {
        throw Error("Error al pubicar el token")
    } else {
        console.log("Token publicado");

    }
    const data = response.json();
    return data;
}

export const tokenUser = async (token: string, url: string) => {
    const response = await fetch(`${url}?token=${token}`);
    const data = response.json();

    if (!response.ok) {
        throw Error("No se pudo obtener el token")
    }
    return data
}

export const deleteToken = async (id: string, url: string) => {
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'Application/json'
        },
    })
    const data = response.json();
    if (!response.ok) {
        throw Error("No se pudo eliminar el token")
    }
    return data
}