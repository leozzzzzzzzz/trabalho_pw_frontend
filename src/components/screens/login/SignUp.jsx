import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carregando from '../../comuns/Carregando';
import Alerta from '../../comuns/Alert';
import CampoEntrada from '../../comuns/CampoEntrada';
import { addUsuarioAPI } from '../../../services/usuarioService';

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
    const navigate = useNavigate();

    // Função genérica para atualizar os campos do formulário
    const handleChange = e => {
        const { name, value } = e.target;
        setDados(prev => ({ ...prev, [name]: value }));
    }

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
                const response = await addUsuarioAPI(body);

                console.log(response);

                if (!response.message) {
                    navigate("/login");
                } else {
                    setAlerta({ status: "error", message: response.message || "Erro ao cadastrar." });
                }
            }
            catch (err) {
                console.error(err.message);
                setAlerta({ status: "error", message: err.message });
            }
            finally {
                setCarregando(false);
            }       
    }

    return (
        <div className="container"  >
            <div className="row justify-content-center">
                <div className="col-12 col-md-6">
                    <Carregando carregando={carregando}>
                        <Alerta alerta={alerta} />
                        <form onSubmit={acaoSignup}>
                            <h1 className="h3 mb-3 fw-normal">Cadastro de usuário</h1>
                            <CampoEntrada value={dados.email}
                                id="txtEmail" name="email" label="E-mail"
                                tipo="email" 
                                onchange={handleChange}
                                msgvalido="Email OK" msginvalido="Informe o email"
                                requerido={true} readonly={false}
                                maxCaracteres={40} />
                            <CampoEntrada value={dados.cpf}
                                id="txtCpf" name="cpf" label="CPF"
                                tipo="text" 
                                onchange={handleChange}
                                msgvalido="CPF OK" msginvalido="Informe o CPF"
                                requerido={true} readonly={false}
                                maxCaracteres={40} />
                            <CampoEntrada value={dados.telefone}
                                id="txtTelefone" name="telefone" label="Telefone"
                                tipo="text" 
                                onchange={handleChange}
                                msgvalido="Telefone OK" msginvalido="Informe o telefone"
                                requerido={true} readonly={false}
                                maxCaracteres={20} />
                            <CampoEntrada value={dados.nome}
                                id="txtNome" name="nome" label="Nome"
                                tipo="text" 
                                onchange={handleChange}
                                msgvalido="Nome OK" msginvalido="Informe o nome"
                                requerido={true} readonly={false}
                                maxCaracteres={40} />
                            <CampoEntrada value={dados.senha}
                                id="txtSenha" name="senha" label="Senha"
                                tipo="password"
                                onchange={handleChange}
                                msgvalido="Senha OK" msginvalido="Informe a senha"
                                requerido={true} readonly={false}
                                maxCaracteres={40} />
                            <button className="w-100 btn btn-lg btn-primary" type="submit">Criar conta</button>
                        </form>
                    </Carregando>
                </div>
            </div>
        </div>
    )
}

export default SignUp