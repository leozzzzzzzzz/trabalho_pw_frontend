import { useContext } from 'react';
import Alerta from '../../comuns/Alert';
import PassagemContext from './PassagemContext';
import Col from 'react-bootstrap/Col';
import CampoEntrada from "../../comuns/CampoEntrada";
import CampoSelect from '../../comuns/CampoSelect';
import Dialogo from '../../comuns/Dialogo';
import 'bootstrap-icons/font/bootstrap-icons.css';

function PassagemForm() {
    const { objeto, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm, veiculos, locais } = useContext(PassagemContext);

    return (
        <Dialogo id="modalEdicao" titulo="Passagem"
        acaoCadastrar={acaoCadastrar} exibirForm={exibirForm} setExibirForm={setExibirForm}>
            <Alerta alerta={alerta} />
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.id}
                    id="txtID" name="id" label="ID"
                    tipo="number" onchange={handleChange}
                    readonly={true}/>
            </Col>
            <Col xs={12} md={12}>
                <CampoSelect value={objeto.veiculo}
                    id="selectVeiculo" name="veiculo" label="Veículo"
                    onchange={handleChange}
                    requerido={true}
                    msgvalido="OK" msginvalido="Informe o veículo">
                        {veiculos.map(veiculo => (
                            <option key={veiculo.id} value={veiculo.id}>{veiculo.placa}</option>
                        ))}
                </CampoSelect>
            </Col>
            <Col xs={12} md={12}>
                <CampoSelect value={objeto.local}
                    id="selectLocal" name="local" label="Local"
                    onchange={handleChange}
                    requerido={true}
                    msgvalido="OK" msginvalido="Informe o local">
                        {locais.map(local => (
                            <option key={local.codigo} value={local.codigo}>{local.localizacao}</option>
                        ))}
                </CampoSelect>
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.data_hora ? objeto.data_hora.slice(0, 16) : ''}
                    id="txtDataHora" name="data_hora" label="Data e Hora"
                    tipo="datetime-local" onchange={handleChange}
                    requerido={true} readonly={false} 
                    msgvalido="OK" msginvalido="Informe a data"/>
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.valor}
                    id="txtValor" name="valor" label="Valor"
                    tipo="number" onchange={handleChange}
                    requerido={true} readonly={false}
                    msgvalido="OK" msginvalido="Informe o valor"/>
            </Col>
            <Col xs={12} md={12}>
                <CampoSelect value={objeto.pago}
                    id="selectPago" name="pago" label="Pago"
                    onchange={handleChange}
                    requerido={true}
                    msgvalido="OK" msginvalido="Informe se está pago ou não">
                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                </CampoSelect>
            </Col>
        </Dialogo>
    );
}

export default PassagemForm;