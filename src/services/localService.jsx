export const getLocalAPI = async () => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/local`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json()
    return data;
}

export const addLocalAPI = async (local) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/local`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(local)
    })
    const data = await response.json()
    return data;
}   

export const updateLocalAPI = async (local) => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/local/${local.codigo}`,{
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(local)
    })
    const data = await response.json()
    return data;
}   

export const deleteLocalAPI = async id => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/local/${id}`,{
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json()
    return data;
}   

export const getLocalByCodigoAPI = async codigo => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/local/${codigo}`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const data = await response.json()
    return data;
}