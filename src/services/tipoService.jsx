export const getTipoAPI = async () => {
  const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/tipo`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}
export const addTipoAPI = async (tipo) => {
  const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/tipo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tipo),
  });
  const data = await response.json();
  return data;
}

export const updateTipoAPI = async (tipo) => {
  const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/tipo/${tipo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tipo),
  });
  const data = await response.json();
  return data;
}

export const deleteTipoAPI = async codigo => { 
  const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/tipo/${codigo}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

export const getTipoByCodigoAPI = async codigo => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/tipo/${codigo}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
}