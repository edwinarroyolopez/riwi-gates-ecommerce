export const getUserByEmail = async (email: string) => {
    const response = await fetch(`http://localhost:3040/users?email=${email}`);
    const data = response.json();

    if (!response.ok) {
        throw Error("No se pudo accder al email")
    }
    return data
}

export const changeUserStatus = async (id: string) => {
    const updateStatus = {
        isConfirm: "true"
    };

    const response = await fetch(`http://localhost:3040/users/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-type': 'Application/json'
        },
        body: JSON.stringify(updateStatus)
    })

    if (!response.ok) {
        throw Error("No se pudo accder al email")
    }
    const data = await response.json();

    return data
}

export const deleteUser = async (id: string, url: string) => {
    const response = await fetch(`${url}/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'Application/json'
        },
    })
    const data = response.json();
    if (!response.ok) {
        throw Error("No se pudo eliminar el usuraio")
    }
    return data
}