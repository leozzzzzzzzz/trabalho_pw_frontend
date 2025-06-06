import { getToken } from "../seguranca/Autenticacao"
export const getPassagensAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/passagem`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "authorization": getToken()
        }
    })
    const data = await response.json()
    return data;
}

export const addPassagemAPI = async (passagem) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/passagem`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            "authorization": getToken()
        },
        body: JSON.stringify(passagem)
    })
    const data = await response.json()
    return data;
}

export const updatePassagemAPI = async (passagem) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/passagem/${passagem.id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            "authorization": getToken()
        },
        body: JSON.stringify(passagem)
    })
    const data = await response.json()
    return data;
}

export const deletePassagemAPI = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/passagem/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
            "authorization": getToken()
        }
    })
    const data = await response.json()
    return data;
}

export const getPassagemByIdAPI = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/passagem/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            "authorization": getToken()
        }
    })
    const data = await response.json()
    return data;
}

