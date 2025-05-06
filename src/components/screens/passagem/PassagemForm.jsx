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

    const dados = objeto.data || {};
    console.log(dados)
    return (
        <Dialogo id="modalEdicao" titulo="Local"
        acaoCadastrar={acaoCadastrar} exibirForm={exibirForm} setExibirForm={setExibirForm}>
            <Alerta alerta={alerta} />
            <Col xs={12} md={12}>
                <CampoEntrada value={dados.id}
                    id="txtID" name="id" label="ID"
                    tipo="number" onchange={handleChange}
                    readonly={true}/>
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={dados.veiculo}
                    id="txtVeiculo" name="veiculo" label ="Veículo"
                    tipo="number" onchange={handleChange}
                    requerido={true} readonly={false}
                    msgvalido="OK" msginvalido="Informe o tipo" />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={dados.local}
                    id="txtLocal" name="local" label="Local"
                    tipo="text" onchange={handleChange}
                    requerido={true} readonly={false}
                    msgvalido="OK" msginvalido="Informe o local"/>
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={dados.data_hora ? dados.data_hora.slice(0, 16) : ''}
                    id="txtDataHora" name="data_hora" label="Data e Hora"
                    tipo="datetime-local" onchange={handleChange}
                    requerido={true} readonly={false} 
                    msgvalido="OK" msginvalido="Informe a data"/>
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={dados.valor}
                    id="txtValor" name="valor" label="Valor"
                    tipo="number" onchange={handleChange}
                    requerido={true} readonly={false}
                    msgvalido="OK" msginvalido="Informe o valor"/>
            </Col>
            <Col xs={12} md={12}>
                <CampoSelect value={dados.pago}
                    id="selectPago" name="pago" label="Pago"
                    onchange={handleChange}
                    requerido={true}
                    msgvalido="OK" msginvalido="Informe se está pago ou não">
                        <option value="true">Sim</option>
                        <option value="false">Não</option>
                </CampoSelect>
            </Col>
        </Dialogo>

    )
}

export default PassagemForm;