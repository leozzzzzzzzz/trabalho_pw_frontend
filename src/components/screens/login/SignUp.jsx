import { useState, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { gravaAutenticacao, getToken } from '../../../seguranca/Autenticacao';
import Carregando from '../../comuns/Carregando';
import Alerta from '../../comuns/Alert';
import CampoEntrada from '../../comuns/CampoEntrada';
import CampoSelect from '../../comuns/CampoSelect';

function SignUp(){
    const [dados, setDados] = useState({
        email: "",
        cpf: "",
        telefone: "",
        nome: "",
        tipo: "c",
        senha: ""
    });

    const [alerta, setAlerta] = useState({ status: "", message: "" });
    const [carregando, setCarregando] = useState(false);

    const acaoSignup = async e => {
            e.preventDefault();
            try {
                const body = {
                    email: dados.email,
                    cpf: dados.cpf,
                    telefone: dados.telefone,
                    nome: dados.nome,
                    tipo: "c",
                    senha: dados.senha
                };
                setCarregando(true);
                await fetch(`${process.env.REACT_APP_ENDERECO_API}/signup`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                }).then(response => response.json())
                
            }
            catch (err) {
                console.error(err.message);
                setAlerta({ status: "error", message: err.message });
            }
            finally {
                setCarregando(false);
                const navigate = Navigate(); 
                navigate("/login");
            }       
    }

    return (
        <div className="container"  >
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <Carregando carregando={carregando}>
                        <Alerta alerta={alerta} />
                        <form onSubmit={acaoSignup}>
                            <h1 className="h3 mb-3 fw-normal">Login de usuário</h1>
                            <CampoEntrada value={dados.email}
                                id="txtEmail" name="email" label="E-mail"
                                tipo="email" 
                                msgvalido="Email OK" msginvalido="Informe o email"
                                requerido={true} readonly={false}
                                maxCaracteres={40} />
                            <CampoEntrada value={dados.cpf}
                                id="txtCpf" name="cpf" label="CPF"
                                tipo="text" 
                                msgvalido="CPF OK" msginvalido="Informe o CPF"
                                requerido={true} readonly={false}
                                maxCaracteres={40} />
                                <CampoEntrada value={dados.telefone}
                                    id="txtTelefone" name="telefone" label="Telefone"
                                    tipo="text" 
                                    msgvalido="Telefone OK" msginvalido="Informe o telefone"
                                    requerido={true} readonly={false}
                                    maxCaracteres={20} />
                                <CampoEntrada value={dados.nome}
                                    id="txtNome" name="nome" label="Nome"
                                    tipo="text" 
                                    msgvalido="Nome OK" msginvalido="Informe o nome"
                                    requerido={true} readonly={false}
                                    maxCaracteres={40} />
                                <CampoEntrada value={dados.senha}
                                    id="txtSenha" name="senha" label="Senha"
                                    tipo="password"
                                    msgvalido="Senha OK" msginvalido="Informe a senha"
                                    requerido={true} readonly={false}
                                    maxCaracteres={40} />
                                <button className="w-100 btn btn-lg btn-primary" type="submit">Efetuar login</button>
                        </form>
                    </Carregando>
                </div>
            </div>
        </div>
    )
}

export default SignUp