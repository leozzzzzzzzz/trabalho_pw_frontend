import { getToken } from '../seguranca/Autenticacao';

export const getUsuarioAPI = async ( cpf ) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/usuario/${cpf}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        "authorization": getToken()
        },
    });
    const data = await response.json();
    return data;

};

export const addUsuarioAPI = async (usuario) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/usuario`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "authorization": getToken()
        },
        body: JSON.stringify(usuario),
    });
    const data = await response.json();
    return data;
}

export const updateUsuarioAPI = async (usuario) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/usuario/${usuario.cpf}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "authorization": getToken()
        },
        body: JSON.stringify(usuario),
    });
    const data = await response.json();
    return data;
}

export const deleteUsuarioAPI = async codigo => { 
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/usuario/${codigo}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "authorization": getToken()
        },
    });
    const data = await response.json();
    return data;
}

