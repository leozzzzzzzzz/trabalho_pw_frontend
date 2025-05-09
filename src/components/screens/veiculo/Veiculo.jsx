import { useState, useEffect } from "react"
import VeiculoContext from "./VeiculoContext"
import VeiculoTable from "./VeiculoTable"
import VeiculoForm from "./VeiculoForm"
import { getVeiculosAPI, addVeiculoAPI, updateVeiculoAPI, deleteVeiculoAPI, getVeiculoByIdAPI } from "../../../services/veiculoService"
import { getTipoAPI } from '../../../services/tipoService';
import Carregando from "../../comuns/Carregando"

function Veiculo() {

    const [alerta, setAlerta] = useState({"status" : "", message : ""})
    const [listaObj, setListaObj] = useState([])
    const [carregando, setCarregando] = useState(true);

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

    const [tipos, setTipos] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const tiposData = await getTipoAPI();
            // console.log("Tipos carregados:", tiposData);
            setTipos(tiposData);
        };
        fetchData();
    }, []);
    
    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({
            id: 0,
            tipo: 0,
            placa: "",
            cor: ""
        });
        setExibirForm(true);
    }
    const editarObjeto = async id => {
        const res = await getVeiculoByIdAPI(id);
        const veiculo = res.data;

        const tipoCorrespondente = tipos.find(tipo => tipo.id === veiculo.tipo);
        const tipoId = tipoCorrespondente ? tipoCorrespondente.id : 0;

        setObjeto({
            id: veiculo.id,
            tipo: parseInt(tipoId),
            placa: veiculo.placa,
            cor: veiculo.cor
        }); 

        setEditar(true);
        setAlerta({ status: "", message: "" });
        setExibirForm(true);
    }
    const acaoCadastrar = async (e) => {
        if (e) e.preventDefault(); // mostrar o erro quando a paca for invalida
        try {
            let retornoAPI = null;
            if (editar) {
                retornoAPI = await updateVeiculoAPI(objeto);
            } else {
                retornoAPI = await addVeiculoAPI(objeto);
            }
            setAlerta({ status: retornoAPI.status, message: retornoAPI.message });
            recuperaVeiculos();
            setExibirForm(false);
        } catch (error) {
            setAlerta({ status: "error", message: "Erro: " + error.message });
        }
    }
    
    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setObjeto({ ...objeto, [name]: value });
    }

    return (
        <VeiculoContext.Provider value = {
            {
                 alerta, listaObj, remover, objeto, editarObjeto, tipos, setTipos,
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