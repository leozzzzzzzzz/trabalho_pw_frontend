import { useContext } from 'react'
import Alerta from '../../comuns/Alert';
import TipoContext from './TipoContext';
import Col from 'react-bootstrap/Col';
import CampoEntrada from "../../comuns/CampoEntrada";
import CampoEntradaTextArea from '../../comuns/CampoEntradaTextArea';

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
                    readonly={true}
                    maxCaracteres={5} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntrada value={objeto.nome}
                    id="txtNome" name="nome" label="Nome"
                    tipo="text" onchange={handleChange}
                    requerido={true} readonly={false}
                    maxCaracteres={40} />
            </Col>
            <Col xs={12} md={12}>
                <CampoEntradaTextArea value={objeto.tarifa}
                    id="txtTarifa" name="tarifa" label="Tarifa"
                    tipo="text" onchange={handleChange}
                    requerido={true} readonly={false} />
            </Col>
        </Dialogo>

    )
}

export default TipoForm;