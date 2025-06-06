import { useState, useEffect } from "react"
import TipoContext from "./TipoContext"
import TipoTable from "./TipoTable"
import TipoForm from "./TipoForm"
import { getTipoAPI, addTipoAPI, updateTipoAPI, deleteTipoAPI, getTipoByCodigoAPI } from "../../../services/tipoService"
import Carregando from "../../comuns/Carregando"
import WithAuth from "../../../seguranca/WithAuth";
import { useNavigate } from "react-router-dom";

function Tipo() {
    let navigate = useNavigate();
    const [alerta, setAlerta] = useState({"status" : "", message : ""})
    const [listaObj, setListaObj] = useState([])
    const [carregando, setCarregando] = useState(true);

    const recuperaTipos = async () => {
        try {
            setCarregando(true);
            setListaObj(await getTipoAPI());
            setCarregando(false);
        } catch (err) {
            navigate("/login", { replace: true })
        }
    }

    const remover = async codigo => {
        if(window.confirm("Deseja remover este objeto?")){
            try {
                let retornoAPI = await deleteTipoAPI(codigo)
                setAlerta({status : retornoAPI.status, message : retornoAPI.message})
                recuperaTipos()
            } catch (err) {
                navigate("/login", { replace: true })
            }
        }
    }
    useEffect(() => {
        recuperaTipos()
    },[])

    const [editar, setEditar] = useState(false);
    const [exibirForm, setExibirForm] = useState(false);

    const [objeto, setObjeto] = useState({
        codigo: "",
        nome: "",
        tarifa: 0.00,
      })

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({
            codigo: 0,
            nome: "",
            tarifa: 0.00,
        });
        setExibirForm(true);
    }
    const editarObjeto = async codigo => {
        try {
            setEditar(true);
            setAlerta({ status: "", message: "" });
            const tipo = await getTipoByCodigoAPI(codigo)
            setObjeto(tipo.data);
            setExibirForm(true);
        } catch (err) {
            navigate("/login", { replace: true })
        }
    }
    const acaoCadastrar = async (e) => {
        try {
            if (e) {
                e.preventDefault();
            }
            let retornoAPI = null;
            if(editar){
                retornoAPI = await updateTipoAPI(objeto);
            }else{
                retornoAPI = await addTipoAPI(objeto);
            }
            setAlerta({status : retornoAPI.status, message : retornoAPI.message})
            recuperaTipos()
            setExibirForm(false);
        } catch (err) {
            navigate("/login", { replace: true })
        }
    }
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    return (
        <TipoContext.Provider value = {
            {
                 alerta, listaObj, remover, objeto, editarObjeto,
                 acaoCadastrar, handleChange, novoObjeto, exibirForm, setExibirForm
            }
        }> 
            <Carregando carregando={carregando}>
                <TipoTable/>
            </Carregando>
            
            <TipoForm/>
        </TipoContext.Provider>
    )

}

export default WithAuth(Tipo)