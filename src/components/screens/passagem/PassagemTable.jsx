import { useContext } from "react";
import PassagemContext from "./PassagemContext"; // Crie um contexto específico para passagens
import Alert from "../../comuns/Alert";
import { Table, Button } from "react-bootstrap";

function PassagemTable() {
    const { alerta, listaObj, remover, novoObjeto, editarObjeto } = useContext(PassagemContext);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Passagens</h1>
            <Alert alerta={alerta} />
            <Button variant="primary" onClick={() => novoObjeto()}>
                <i className="bi bi-file-earmark-plus"></i> Nova Passagem
            </Button>
            {listaObj.length === 0 && <h1>Nenhum registro encontrado</h1>}
            {
                listaObj.length > 0 &&
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>Ações</th>
                            <th>ID</th>
                            <th>Veículo</th>
                            <th>Local</th>
                            <th>Data/Hora</th>
                            <th>Valor</th>
                            <th>Pago</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaObj.map((objeto) => (
                                <tr key={objeto.id}>
                                    <td align="center">
                                        <Button variant="info" onClick={() => editarObjeto(objeto.id)}>
                                            <i className="bi bi-pencil-square"></i> Editar
                                        </Button>{' '}
                                        <Button variant="danger" onClick={() => remover(objeto.id)}>
                                            <i className="bi bi-trash-fill"></i> Excluir
                                        </Button>
                                    </td>
                                    <td>{objeto.id}</td>
                                    <td>{objeto.veiculo}</td>
                                    <td>{objeto.local}</td>
                                    <td>{new Date(objeto.data_hora).toLocaleString()}</td>
                                    <td>{objeto.valor}</td>
                                    <td>{objeto.pago ? 'Sim' : 'Não'}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            }
        </div>
    );
}

export default PassagemTable;
