import { useState, useEffect } from "react"
import VeiculoContext from "./VeiculoContext"
import VeiculoTable from "./VeiculoTable"
import VeiculoForm from "./VeiculoForm"
import { getVeiculosAPI, addVeiculoAPI, updateVeiculoAPI, deleteVeiculoAPI, getVeiculoByIdAPI } from "../../../services/veiculoService"
import Carregando from "../../comuns/Carregando"

function Veiculo() {

    const [alerta, setAlerta] = useState({"status" : "", message : ""})
    const [listaObj, setListaObj] = useState([])
    const [carregando, setCarregando] = useState(true);
    const [listaTipo, setListaTipo] = useState([])

    const recuperaVeiculos = async () => {
        setCarregando(true);
        setListaObj(await getVeiculosAPI());
        setCarregando(false);
    }

    const remover = async codigo => {
        if(window.confirm("Deseja remover este objeto?")){
            let retornoAPI = await deleteVeiculoAPI(codigo)
            setAlerta({status : retornoAPI.status, message : retornoAPI.message})
            recuperaVeiculos()
        }
    }
    useEffect(() => {
        recuperaVeiculos()
    },[])

    const [editar, setEditar] = useState(false);
    const [exibirForm, setExibirForm] = useState(false);

    const [objeto, setObjeto] = useState({
        id: "",
        tipo: "",
        placa: "",
        cor: ""
      })

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({
            id: 0,
            tipo: "",
            placa: "",
            cor: ""
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
            retornoAPI = await addVeiculoAPI(objeto);
        }else{
            retornoAPI = await addVeiculoAPI(objeto);
        }
        setAlerta({status : retornoAPI.status, message : retornoAPI.message})
        recuperaVeiculos()
        setExibirForm(false);
    }
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    return (
        <VeiculoContext.Provider value = {
            {
                 alerta, listaObj, remover, objeto, editarObjeto,
                 acaoCadastrar, handleChange, novoObjeto, exibirForm, setExibirForm
            }
        }> 
            <Carregando carregando={carregando}>
                <VeiculoTable/>
            </Carregando>
            
            <VeiculoForm/>
        </VeiculoContext.Provider>
    )

}

export default Veiculo