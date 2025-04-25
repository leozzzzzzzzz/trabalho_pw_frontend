export const getPassagensAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/passagens`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json()
    return data;
}

export const addPassagemAPI = async (passagem) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/passagens`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(passagem)
    })
    const data = await response.json()
    return data;
}

export const updatePassagemAPI = async (passagem) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/passagens/${passagem.id}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(passagem)
    })
    const data = await response.json()
    return data;
}

export const deletePassagemAPI = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/passagens/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json()
    return data;
}

export const getPassagemByIdAPI = async (id) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/passagens/${id}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json()
    return data;
}

