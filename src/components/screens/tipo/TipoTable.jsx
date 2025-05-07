import { useContext } from "react";
import TipoContext from "./TipoContext";
import Alert from "../../comuns/Alert";
import { Table, Button } from "react-bootstrap";

function TipoTable() {
    const { alerta, listaObj, remover, novoObjeto, editarObjeto } = useContext(TipoContext);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Tipos</h1>
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
                            <th>Nome</th>
                            <th>Tarifa</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaObj.map((objeto) => (
                                <tr key={objeto.codigo}>
                                    <td align="center">
                                        <Button variant="info" onClick={() => editarObjeto(objeto.codigo)}>
                                            <i className="bi bi-pencil-square"></i> Editar
                                        </Button>{' '}
                                        <Button variant="danger" onClick={() => remover(objeto.codigo)}>
                                            <i className="bi bi-trash-fill"></i> Excluir
                                        </Button>
                                    </td>
                                    <td>{objeto.codigo}</td>
                                    <td>{objeto.nome}</td>
                                    <td>{objeto.tarifa}</td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            }
        </div>
    );
}

export default TipoTable;
