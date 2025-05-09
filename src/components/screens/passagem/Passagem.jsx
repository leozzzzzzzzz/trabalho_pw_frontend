import { useState, useEffect } from "react"
import PassagemContext from "./PassagemContext"
import PassagemTable from "./PassagemTable"
import PassagemForm from "./PassagemForm"
import { getPassagensAPI, addPassagemAPI, updatePassagemAPI, deletePassagemAPI, getPassagemByIdAPI } from "../../../services/passagemService"
import { getVeiculosAPI } from '../../../services/veiculoService';
import { getLocalAPI } from '../../../services/localService';
import Carregando from "../../comuns/Carregando"

function Passagem() {

    const [alerta, setAlerta] = useState({"status" : "", message : ""})
    const [listaObj, setListaObj] = useState([])
    const [carregando, setCarregando] = useState(true);
    const [listaPassagem, setListaPassagem] = useState([])

    const recuperaPassagens = async () => {
        setCarregando(true);
        setListaObj(await getPassagensAPI());
        setCarregando(false);
    }
    const remover = async codigo => {
        if(window.confirm("Deseja remover este objeto?")){
            let retornoAPI = await deletePassagemAPI(codigo)
            setAlerta({status : retornoAPI.status, message : retornoAPI.message})
            recuperaPassagens()
        }
    }
    useEffect(() => {
        recuperaPassagens()
    },[])

    const [editar, setEditar] = useState(false);
    const [exibirForm, setExibirForm] = useState(false);

    const [objeto, setObjeto] = useState({
        id: "",
        placa: "",
        localizacao: "",
        data_hora: "",
        valor: "",
        pago: false
      })

    const [veiculos, setVeiculos] = useState([]);
    const [locais, setLocais] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            setVeiculos(await getVeiculosAPI());
            setLocais(await getLocalAPI());
        };
        fetchData();
    }, []);

    const novoObjeto = () => {
        setEditar(false);
        setAlerta({ status: "", message: "" });
        setObjeto({
            id: "",
            placa: "",
            localizacao: "",
            data_hora: "",
            valor: "",
            pago: false
        });
        setExibirForm(true);
    }
    const editarObjeto = async id => {

        if (veiculos.length === 0 || locais.length === 0) {
            alert("Os dados de veículos e locais ainda estão sendo carregados. Tente novamente em alguns segundos.");
            return;
        }

        const res = await getPassagemByIdAPI(id);
        const passagem = res.data;

        //mapeamentos
        const veiculoCorrespondente = veiculos.find(v => v.placa === passagem.placa);
        const veiculoId = veiculoCorrespondente ? veiculoCorrespondente.id : "";

        const localCorrespondente = locais.find(l => l.localizacao === passagem.localizacao);
        const localId = localCorrespondente ? localCorrespondente.codigo : "";

        setObjeto({
            id: passagem.id,
            veiculo: veiculoId,
            local: localId,
            data_hora: passagem.data_hora,
            valor: passagem.valor,
            pago: passagem.pago
        });
        setEditar(true);
        setAlerta({ status: "", message: "" });
        setExibirForm(true);
    }
    const acaoCadastrar = async (e) => {
        if (e) {
            e.preventDefault();
        }
        let retornoAPI = null;
        if(editar){
            retornoAPI = await updatePassagemAPI(objeto);
        }else{
            retornoAPI = await addPassagemAPI(objeto);
        }
        setAlerta({status : retornoAPI.status, message : retornoAPI.message})
        recuperaPassagens()
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
                 acaoCadastrar, handleChange, novoObjeto, exibirForm, setExibirForm,
                 veiculos, locais
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