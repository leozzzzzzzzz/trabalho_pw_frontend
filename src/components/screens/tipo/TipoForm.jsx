import { useContext } from 'react'
import Alerta from '../../comuns/Alert';
import TipoContext from './TipoContext';
import Col from 'react-bootstrap/Col';
import CampoEntrada from "../../comuns/CampoEntrada";

import Dialogo from '../../comuns/Dialogo';

function TipoForm() {

    const { objeto, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm } = useContext(TipoContext);

    return (
        <Dialogo id="modalEdicao" titulo="Tipo" 
        acaoCadastrar={acaoCadastrar} exibirForm={exibirForm} setExibirForm={setExibirForm}>
            <Alerta alerta={alerta} />
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.codigo}
                    id="txtCodido" name="codigo" label="Código"
                    tipo="number" onchange={handleChange}
                    readonly={true} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.nome}
                    id="txtNome" name="nome" label="Nome"
                    tipo="text" onchange={handleChange}
                    requerido={true} readonly={false}
                    msgvalido="OK" msginvalido="Informe o nome" />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.tarifa}
                    id="txtTarifa" name="tarifa" label="Tarifa"
                    tipo="number" onchange={handleChange}
                    requerido={true} readonly={false}
                    msgvalido="OK" msginvalido="Informe a tarifa" />
            </Col>
        </Dialogo>

    )
}

export default TipoForm;