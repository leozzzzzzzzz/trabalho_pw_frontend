import { useContext } from 'react'
import Alerta from '../../comuns/Alert';
import LocalContext from './LocalContext';
import Col from 'react-bootstrap/Col';
import CampoEntrada from "../../comuns/CampoEntrada";
import CampoEntradaTextArea from '../../comuns/CampoEntradaTextArea';
import CampoSelect from '../../comuns/CampoSelect';
import Dialogo from '../../comuns/Dialogo';

function LocalForm() {

    const { objeto, handleChange, acaoCadastrar, alerta, exibirForm, setExibirForm } = useContext(LocalContext);

    return (
        <Dialogo id="modalEdicao" titulo="Local"
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
                <CampoEntradaTextArea value={objeto.localizacao}
                    id="txtLocalizacao" name="localizacao" label="Endereço"
                    tipo="text" onchange={handleChange}
                    requerido={true} readonly={false} />
            </Col>
        </Dialogo>

    )
}

export default LocalForm;