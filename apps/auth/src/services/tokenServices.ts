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
