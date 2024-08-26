export const getUserByEmail = async (email: string) => {
    const response = await fetch(`http://localhost:8000/users?email=${email}`);
    const data = response.json();

    if (!response.ok) {
        throw Error("No se pudo accder al email")
    }
    return data
}
