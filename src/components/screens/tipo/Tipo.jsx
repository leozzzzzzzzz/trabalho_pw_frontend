import { useState, useEffect } from "react"
import TipoContext from "./TipoContext"
import TipoTable from "./TipoTable"
import TipoForm from "./TipoForm"
import { getTipoAPI, addTipoAPI, updateTipoAPI, deleteTipoAPI, getTipoByCodigoAPI } from "../../../services/tipoService"
import Carregando from "../../comuns/Carregando"

function Tipo() {

    const [alerta, setAlerta] = useState({"status" : "", message : ""})
    const [listaObj, setListaObj] = useState([])
    const [carregando, setCarregando] = useState(true);
    const [listaTipo, setListaTipo] = useState([])

    const recuperaTipos = async () => {
        setCarregando(true);
        setListaObj(await getTipoAPI());
        setCarregando(false);
    }

    const remover = async codigo => {
        if(window.confirm("Deseja remover este objeto?")){
            let retornoAPI = await deleteTipoAPI(codigo)
            setAlerta({status : retornoAPI.status, message : retornoAPI.message})
            recuperaTipos()
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
    const editarObjeto = objeto => {
        setEditar(true);
        setAlerta({ status: "", message: "" });
        setObjeto(objeto);
        setExibirForm(true);
    }
    const acaoCadastrar = async () => {
        let retornoAPI = null;
        if(editar){
            retornoAPI = await addTipoAPI(objeto);
        }else{
            retornoAPI = await addTipoAPI(objeto);
        }
        setAlerta({status : retornoAPI.status, message : retornoAPI.message})
        recuperaTipos()
        setExibirForm(false);
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

export default Tipo