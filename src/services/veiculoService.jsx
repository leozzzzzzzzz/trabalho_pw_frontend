export const getVeiculosAPI = async () => {
  const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/veiculos`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

export const addVeiculoAPI = async (veiculo) => {
  const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/veiculos`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(veiculo),
  });
  const data = await response.json();
  return data;
}   

export const updateVeiculoAPI = async (veiculo) => {
  const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/veiculos/${veiculo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(veiculo),
  });
  const data = await response.json();
  return data;
}

export const deleteVeiculoAPI = async id => {
  const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/veiculos/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

export const getVeiculoByIdAPI = async id => {
  const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/veiculos/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const data = await response.json();
  return data;
}

