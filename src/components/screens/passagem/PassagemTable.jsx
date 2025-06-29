import { useContext } from "react";
import PassagemContext from "./PassagemContext"; // Crie um contexto específico para passagens
import Alert from "../../comuns/Alert";
import { Table, Button } from "react-bootstrap";
import { getUsuario } from '../../../seguranca/Autenticacao';

function PassagemTable() {
    const { alerta, listaObj, remover, novoObjeto, editarObjeto } = useContext(PassagemContext);
    const usuario = getUsuario();
    const isAdmin = usuario && usuario.tipo === 'a';

    return (
        <div style={{ padding: '20px' }}>
            <h1>Passagens</h1>
            <Alert alerta={alerta} />
            {listaObj.length === 0 && <h1>Nenhum registro encontrado</h1>}
            {
                listaObj.length > 0 &&
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Veículo</th>
                            <th>Local</th>
                            <th>Data/Hora</th>
                            <th>Valor</th>
                            <th>Pago</th>
                            <th style={{ textAlign: 'center', width: '8rem' }}></th>
                            {isAdmin && <th style={{ textAlign: 'center', width: '8rem' }}></th>}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaObj.map((objeto) => (
                                // console.log(objeto),
                                <tr key={objeto.id}>
                                    
                                    <td>{objeto.id}</td>
                                    <td>{objeto.placa}</td>
                                    <td>{objeto.localizacao}</td>
                                    <td>{new Date(objeto.data_hora).toLocaleString()}</td>
                                    <td>{objeto.valor}</td>
                                    <td>{objeto.pago ? 'Sim' : 'Não'}</td>
                                    <td align="center">
                                        <Button variant="info" onClick={() => editarObjeto(objeto.id)}>
                                            <i className="bi bi-pencil-square"></i> Editar
                                        </Button>{' '}
                                    </td>
                                    {isAdmin && (
                                        <td align="center">
                                            <Button variant="danger" onClick={() => remover(objeto.id)}>
                                                <i className="bi bi-trash-fill"></i> Excluir
                                            </Button>
                                        </td>
                                    )}
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
                
            }
            <Button variant="primary" size="lg" onClick={() => novoObjeto()}>
                <i className="bi bi-file-earmark-plus"></i> Cadastrar Passagem
            </Button>
        </div>
    );
}

export default PassagemTable;
