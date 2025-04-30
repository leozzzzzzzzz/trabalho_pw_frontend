import { useState, useEffect } from "react"
import PassagemContext from "./PassagemContext"
import PassagemTable from "./PassagemTable"
import PassagemForm from "./PassagemForm"
import { getPassagensAPI, addPassagemAPI, updatePassagemAPI, deletePassagemAPI, getPassagemByIDAPI } from "../../../services/passagemService"
import Carregando from "../../comuns/Carregando"

function Passagem() {

    const [alerta, setAlerta] = useState({"status" : "", message : ""})
    const [listaObj, setListaObj] = useState([])
    const [carregando, setCarregando] = useState(true);
    const [listaPassagem, setListaPassagem] = useState([])

    const recuperaLocais = async () => {
        setCarregando(true);
        setListaObj(await getPassagensAPI());
        setCarregando(false);
    }
    const remover = async codigo => {
        if(window.confirm("Deseja remover este objeto?")){
            let retornoAPI = await deletePassagemAPI(codigo)
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
        id: "",
        veiculo: "",
        local: "",
        data_hora: "",
        valor: "",
        pago: false
      })

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({
            id: "",
            veiculo: "",
            local: "",
            data_hora: "",
            valor: "",
            pago: false
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
            retornoAPI = await addPassagemAPI(objeto);
        }else{
            retornoAPI = await addPassagemAPI(objeto);
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
        <PassagemContext.Provider value = {
            {
                 alerta, listaObj, remover, objeto, editarObjeto,
                 acaoCadastrar, handleChange, novoObjeto, exibirForm, setExibirForm
            }
        }> 
            <Carregando carregando={carregando}>
                <PassagemTable/>
            </Carregando>
            
            <PassagemForm/>
        </PassagemContext.Provider>
    )

}

export default Passagem