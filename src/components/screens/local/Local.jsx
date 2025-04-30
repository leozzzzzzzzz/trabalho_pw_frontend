import { useState, useEffect } from "react"
import LocalContext from "./LocalContext"
import LocalTable from "./LocalTable"
import LocalForm from "./LocalForm"
import { getLocalAPI, addLocalAPI, updateLocalAPI, deleteLocalAPI, getLocalByCodigoAPI } from "../../../services/localService"
import Carregando from "../../comuns/Carregando"

function Local() {

    const [alerta, setAlerta] = useState({"status" : "", message : ""})
    const [listaObj, setListaObj] = useState([])
    const [carregando, setCarregando] = useState(true);
    const [listaLocal, setListaLocal] = useState([])

    const recuperaLocais = async () => {
        setCarregando(true);
        setListaObj(await getLocalAPI());
        setCarregando(false);
    }
    const remover = async codigo => {
        if(window.confirm("Deseja remover este objeto?")){
            let retornoAPI = await deleteLocalAPI(codigo)
            setAlerta({status : retornoAPI.status, message : retornoAPI.message})
            recuperaLocais()
        }
    }
    useEffect(() => {
        recuperaLocais()
    },[])

    const [editar, setEditar] = useState(false);
    const [exibirForm, setExibirForm] = useState(false);

    const [objeto, setObjeto] = useState({
        codigo: "",
        nome: "",
        localizacao: "",
      })

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({
            codigo: 0,
            nome: "",
            localizacao: "",
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
            retornoAPI = await addLocalAPI(objeto);
        }else{
            retornoAPI = await addLocalAPI(objeto);
        }
        setAlerta({status : retornoAPI.status, message : retornoAPI.message})
        recuperaLocais()
        setExibirForm(false);
    }
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    return (
        <LocalContext.Provider value = {
            {
                 alerta, listaObj, remover, objeto, editarObjeto,
                 acaoCadastrar, handleChange, novoObjeto, exibirForm, setExibirForm
            }
        }> 
            <Carregando carregando={carregando}>
                <LocalTable/>
            </Carregando>
            
            <LocalForm/>
        </LocalContext.Provider>
    )

}

export default Local