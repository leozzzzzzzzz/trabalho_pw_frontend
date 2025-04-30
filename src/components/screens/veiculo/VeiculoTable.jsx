import { useContext } from "react";
import VeiculoContext from "./VeiculoContext";
import Alert from "../../comuns/Alert";
import { Table, Button } from "react-bootstrap";

function VeiculoTable() {
    const { alerta, listaObj, remover, novoObjeto, editarObjeto } = useContext(VeiculoContext);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Veículos</h1>
            <Alert alerta={alerta} />
            <Button variant="primary" onClick={() => novoObjeto()}>
                <i className="bi bi-file-earmark-plus"></i> Novo
            </Button>
            {listaObj.length === 0 && <h1>Nenhum registro encontrado</h1>}
            {
                listaObj.length > 0 &&
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th style={{ textAlign: 'center' }}>Ações</th>
                            <th>Código</th>
                            <th>Tipo</th>
                            <th>placa</th>
                            <th>cor</th>
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
                                    <td>{objeto.tipo}</td>
                                    <td>{objeto.placa}</td>
                                    <td>{objeto.cor}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            }
        </div>
    );
}

export default VeiculoTable;
