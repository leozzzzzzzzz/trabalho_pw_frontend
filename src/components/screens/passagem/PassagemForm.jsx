import { useContext } from 'react'
import Alerta from '../../comuns/Alert';
import PassagemContext from './PassagemContext';
import Col from 'react-bootstrap/Col';
import CampoEntrada from "../../comuns/CampoEntrada";
import CampoEntradaTextArea from '../../comuns/CampoEntradaTextArea';
import CampoSelect from '../../comuns/CampoSelect';
import Dialogo from '../../comuns/Dialogo';

function PassagemForm() {

    const { objeto, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm } = useContext(PassagemContext);

    return (
        <Dialogo id="modalEdicao" titulo="Local">
            <Alerta alerta={alerta} />
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.id}
                    id="txtID" name="id" label="ID"
                    tipo="number" onchange={handleChange}
                    readonly={true}
                    maxCaracteres={5} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.tipo}
                    id="txtTipo" name="tipo" label ="Tipo"
                    tipo="number" onchange={handleChange}
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.data_hora}
                    id="txtDataHora" name="data_hora" label="Data e Hora"
                    tipo="datetime-local" onchange={handleChange}
                    requerido={true} readonly={false} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.valor}
                    id="txtValor" name="valor" label="Valor"
                    tipo="number" onchange={handleChange}
                    requerido={true} readonly={false}
                    maxCaracteres={10} />
            </Col>
            <Col xs={12} md={12}>
                <CampoSelect value={objeto.pago}
                    id="selectPago" name="pago" label="Pago"
                    opcoes={[
                        { valor: true, texto: "Sim" },
                        { valor: false, texto: "Não" }
                    ]}
                    onchange={handleChange}
                    requerido={true} />
            </Col>
        </Dialogo>

    )
}

export default PassagemForm;