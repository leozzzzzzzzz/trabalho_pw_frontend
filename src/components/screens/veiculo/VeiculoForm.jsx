import { useContext } from 'react';
import Alerta from '../../comuns/Alert';
import VeiculoContext from './VeiculoContext';
import Col from 'react-bootstrap/Col';
import CampoEntrada from '../../comuns/CampoEntrada';
import CampoSelect from '../../comuns/CampoSelect';
import Dialogo from '../../comuns/Dialogo';
import 'bootstrap-icons/font/bootstrap-icons.css';

function VeiculoForm() {
    const { objeto, tipos, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm } = useContext(VeiculoContext);

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
                <CampoSelect
                    value={objeto.tipo}
                    id="selectTipo"
                    name="tipo"
                    label="Tipo"
                    tipo="number"
                    onchange={handleChange}
                    requerido={true}
                    msgvalido="OK" msginvalido="Informe o tipo">
                    {/* console.log(tipos) */}
                    {tipos.map (tipo => (
                        <option key={tipo.codigo} value={tipo.codigo}>{tipo.nome}</option>
                    ))}
                </CampoSelect>
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
                    msgvalido="OK" msginvalido="Informe uma placa válida"
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