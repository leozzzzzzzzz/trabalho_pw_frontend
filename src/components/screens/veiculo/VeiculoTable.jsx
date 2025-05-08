import { useContext } from "react";
import VeiculoContext from "./VeiculoContext";
import Alert from "../../comuns/Alert";
import { Table, Button } from "react-bootstrap";

function VeiculoTable() {
    const { alerta, listaObj, remover, novoObjeto, editarObjeto, tipos } = useContext(VeiculoContext);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Veículos</h1>
            <Alert alerta={alerta} />
            
            {listaObj.length === 0 && <h1>Nenhum registro encontrado</h1>}
            {
                listaObj.length > 0 &&
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>Código</th>
                            <th>Tipo</th>
                            <th>placa</th>
                            <th>cor</th>
                            <th style={{ textAlign: 'center' }}>Ações</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaObj.map((objeto) => (
                                <tr key={objeto.id}>
                                    <td>{objeto.id}</td>
                                    <td>{tipos.find(tipo => tipo.codigo === objeto.tipo).nome}</td>
                                    <td>{objeto.placa}</td>
                                    <td>{objeto.cor}</td>
                                    <td align="center">
                                        <Button variant="info" onClick={() => editarObjeto(objeto.id)}>
                                            <i className="bi bi-pencil-square"></i> Editar
                                        </Button>{' '}
                                        <Button variant="danger" onClick={() => remover(objeto.id)}>
                                            <i className="bi bi-trash-fill"></i> Excluir
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                    <br></br>
                    <Button variant="primary" size="lg" onClick={() => novoObjeto()}>
                        <i className="bi bi-file-earmark-plus"></i> Novo
                    </Button>
                </Table>
            }
        </div>
    );
}

export default VeiculoTable;
