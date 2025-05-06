import { useContext } from 'react';
import Alerta from '../../comuns/Alert';
import VeiculoContext from './VeiculoContext';
import Col from 'react-bootstrap/Col';
import CampoEntrada from '../../comuns/CampoEntrada';
import CampoSelect from '../../comuns/CampoSelect';
import Dialogo from '../../comuns/Dialogo';

function VeiculoForm() {
    const { objeto, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm } = useContext(VeiculoContext);

    return (
        <Dialogo id="modalEdicao" titulo="Veículo" exibirForm={exibirForm} setExibirForm={setExibirForm} acaoCadastrar={acaoCadastrar}>

            <Alerta alerta={alerta} />
            <Col xs={12} md={12}>
                <CampoEntrada
                    value={objeto.id}
                    id="txtId"
                    name="id"
                    label="ID"
                    tipo="number"
                    onchange={handleChange}
                    readonly={true}
                />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada
                    value={objeto.tipo}
                    id="txtTipo"
                    name="tipo"
                    label="Tipo"
                    onchange={handleChange}
                    requerido={true}
                    msgvalido="OK" msginvalido="Informe o tipo"
                />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada
                    value={objeto.placa}
                    id="txtPlaca"
                    name="placa"
                    label="Placa"
                    tipo="text"
                    onchange={handleChange}
                    requerido={true}
                    msgvalido="OK" msginvalido="Informe o veículo"
                />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada
                    value={objeto.cor}
                    id="txtCor"
                    name="cor"
                    label="Cor"
                    tipo="text"
                    onchange={handleChange}
                    requerido={true}
                    msgvalido="OK" msginvalido="Informe a cor"
                />
            </Col>
        </Dialogo>
    );
}

export default VeiculoForm;