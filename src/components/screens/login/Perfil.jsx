import { useState, useEffect } from "react";
import { getUsuario, getToken, logout } from "../../../seguranca/Autenticacao";
import { updateUsuarioAPI } from "../../../services/usuarioService";
import { gravaAutenticacao } from "../../../seguranca/Autenticacao";
import CampoEntrada from "../../comuns/CampoEntrada";
import Alerta from "../../comuns/Alert";
import Carregando from "../../comuns/Carregando";
import withAuth from "../../../seguranca/WithAuth";

function Perfil() {
    const [dados, setDados] = useState({
        nome: "",
        email: "",
        cpf: "",
        telefone: "",
        senha: ""
    });
    const [editando, setEditando] = useState(false);
    const [carregando, setCarregando] = useState(true);
    const [alerta, setAlerta] = useState({ status: "", message: "" });

    useEffect(() => {
        async function fetchdados() {
            setCarregando(true);
            try {
                const usuarioLogado = getUsuario();
                // console.log(usuarioLogado);
                
                if (usuarioLogado) {
                    setDados(usuarioLogado);
                } else {
                    setAlerta({ status: "error", message: "Erro ao carregar dados do usuário." });
                }
            } catch (err) {
                setAlerta({ status: "error", message: err });
            }
            setCarregando(false);
        }
        fetchdados();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDados((prev) => ({ ...prev, [name]: value }));
    };

    const handleEditar = () => {
        setEditando(true);
        setAlerta({ status: "", message: "" });
    };

    const handleCancelar = () => {
        setEditando(false);
        setAlerta({ status: "", message: "" });
    };

    const handleSalvar = async (e) => {
        e.preventDefault();
        setCarregando(true);
        try{
            const upd = await updateUsuarioAPI(dados);
            setDados(upd)
            
            try {
                const body = {
                    email: upd.email,
                    senha: dados.senha
                };
                
                
                await fetch(`${process.env.REACT_APP_ENDERECO_API}/login`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(body),
                }).then(response => response.json())
                    .then(json => {
                        if (json.auth === false) {
                            setAlerta({ status: "error", message: json.message })
                        }
                        if (json.auth === true) {
                            gravaAutenticacao(json);
                        }
                    });
            } catch (err) {
                console.error(err.message);
                setAlerta({ status: "error", message: err.message })
            } finally {
                setCarregando(false);
            }
        } catch (err) {
            setAlerta({ status: "error", message: err.message || "Erro ao atualizar perfil." });
            setCarregando(false);
            return;
        }
        setAlerta({ status: "success", message: "Perfil atualizado com sucesso!" });
        
        
        
        setEditando(false);
        setCarregando(false);

    };

    return (
        <div className="container mt-4">
            <h2>Perfil do Usuário</h2>
            <Carregando carregando={carregando}>
                <Alerta alerta={alerta} />
                {!editando ? (
                    <div>
                        <p><b>Nome:</b> {dados.nome}</p>
                        <p><b>Email:</b> {dados.email}</p>
                        <p><b>CPF:</b> {dados.cpf}</p>
                        <p><b>Telefone:</b> {dados.telefone}</p>
                        <p><b>Tipo:</b> {dados.tipo === 'c' ? 'Cliente' : 'Administrador'}</p>               
                        <button className="btn btn-primary" onClick={handleEditar}>Editar</button>
                    </div>
                ) : (
                    <form onSubmit={handleSalvar} className="mt-3">
                        <CampoEntrada
                            value={dados.nome}
                            id="nome"
                            name="nome"
                            label="Nome"
                            tipo="text"
                            onchange={handleChange}
                            requerido={true}
                            readonly={false}
                            maxCaracteres={40}
                            msgvalido="Nome OK"
                            msginvalido="Informe o nome"
                        />
                        <CampoEntrada
                            value={dados.email}
                            id="email"
                            name="email"
                            label="Email"
                            tipo="email"
                            onchange={handleChange}
                            requerido={true}
                            readonly={false}
                            maxCaracteres={40}
                            msgvalido="Email OK"
                            msginvalido="Informe o email"
                        />
                        <CampoEntrada
                            value={dados.cpf}
                            id="cpf"
                            name="cpf"
                            label="CPF"
                            tipo="text"
                            onchange={handleChange}
                            requerido={true}
                            readonly={true}
                            maxCaracteres={14}
                            msgvalido="CPF OK"
                            msginvalido="Informe o CPF"
                        />
                        <CampoEntrada
                            value={dados.telefone}
                            id="telefone"
                            name="telefone"
                            label="Telefone"
                            tipo="text"
                            onchange={handleChange}
                            requerido={true}
                            readonly={false}
                            maxCaracteres={20}
                            msgvalido="Telefone OK"
                            msginvalido="Informe o telefone"
                        />
                        <CampoEntrada
                            value={dados.senha}
                            id="senha"
                            name="senha"
                            label="Senha"
                            tipo="password"
                            onchange={handleChange}
                            requerido={true}
                            readonly={false}
                            maxCaracteres={20}
                            msgvalido="Senha OK"
                            msginvalido="Informe a Senha"
                        />
                        
                        <button className="btn btn-success me-2" type="submit">Salvar</button>
                        <button className="btn btn-secondary" type="button" onClick={handleCancelar}>Cancelar</button>
                    </form>
                )}
            </Carregando>
        </div>
    );
}

export default withAuth(Perfil);