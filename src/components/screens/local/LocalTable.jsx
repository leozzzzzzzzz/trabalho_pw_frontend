import { useContext } from "react";
import LocalContext from "./LocalContext";
import Alert from "../../comuns/Alert";
import { Table, Button } from "react-bootstrap";

function LocalTable() {
    const { alerta, listaObj, remover, novoObjeto, editarObjeto } = useContext(LocalContext);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Locais</h1>
            <Alert alerta={alerta} />
            
            {listaObj.length === 0 && <h1>Nenhum registro encontrado</h1>}
            {
                listaObj.length > 0 &&
                <Table striped bordered hover responsive>
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Nome</th>
                            <th>Localização</th>
                            <th style={{ textAlign: 'center' }}>Ações</th>

                        </tr>
                    </thead>
                    <tbody>
                        {
                            listaObj.map((objeto) => (
                                <tr key={objeto.codigo}>
                                    <td>{objeto.codigo}</td>
                                    <td>{objeto.nome}</td>
                                    <td>{objeto.localizacao}</td>
                                    <td align="center">
                                        <Button variant="info" onClick={() => editarObjeto(objeto.codigo)}>
                                            <i className="bi bi-pencil-square"></i> Editar
                                        </Button>{' '}
                                        <Button variant="danger" onClick={() => remover(objeto.codigo)}>
                                            <i className="bi bi-trash-fill"></i> Excluir
                                        </Button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </Table>
            }
                <Button variant="primary" size="lg" onClick={() => novoObjeto()}>
                    <i className="bi bi-file-earmark-plus"></i> Novo
                </Button>
        </div>
    );
}

export default LocalTable;
