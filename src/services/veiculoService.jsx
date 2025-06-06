import { getToken } from "../seguranca/Autenticacao";

export const getVeiculosAPI = async () => {
  const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/veiculo`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "authorization": getToken()
    },
  });
  const data = await response.json();
  return data;
}

export const addVeiculoAPI = async (veiculo) => {
  const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/veiculo`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      "authorization": getToken()
    },
    body: JSON.stringify(veiculo),
  });
  const data = await response.json();
  return data;
}   

export const updateVeiculoAPI = async (veiculo) => {
  const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/veiculo/${veiculo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      "authorization": getToken()
    },
    body: JSON.stringify(veiculo),
  });
  const data = await response.json();
  return data;
}

export const deleteVeiculoAPI = async id => {
  const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/veiculo/${id}`, {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json',
      "authorization": getToken()
    },
  });
  const data = await response.json();
  return data;
}

export const getVeiculoByIdAPI = async id => {
  const response = await fetch(`${process.env.REACT_APP_ENDERECO_API}/veiculo/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      "authorization": getToken()
    },
  });
  const data = await response.json();
  return data;
}

