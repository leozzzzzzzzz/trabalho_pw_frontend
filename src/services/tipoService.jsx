export const getTipo = async () => {
  const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/tipos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}
export const addTipo = async (tipo) => {
  const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/tipos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tipo),
  });
  const data = await response.json();
  return data;
}

export const updateTipo = async (tipo) => {
  const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/tipos/${tipo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tipo),
  });
  const data = await response.json();
  return data;
}

export const deleteTipo = async codigo => { 
  const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/tipos/${codigo}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

export const getTipoByCodigo = async codigo => {
    const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/tipos/${codigo}`, {
        method: 'GET',
        headers: {
        'Content-Type': 'application/json',
        },
    });
    const data = await response.json();
    return data;
}