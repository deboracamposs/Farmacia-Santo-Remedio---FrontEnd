/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-empty */

import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { buscar, deletar } from "../../../services/Service";
import type Categoria from "../../../models/Categoria";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function DeletarCategoria() {

    const navigate = useNavigate();

    const [ categoria, setCategoria ] = useState<Categoria>({} as Categoria)
    const [ isLoading, setIsLoading ] = useState<boolean>(false)

    const { id } = useParams<{ id: string }>()

    async function buscarPorId( id: string) {
        try {
            await buscar(`/categorias/${id}`, setCategoria)
            } catch (error: any) {
                if (error.toString().includes('401')) {
            }
        }        
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)
            ToastAlerta('A categoria foi deletada com sucesso!', 'success')
        } catch (error: any) {
            if (error.toString().includes('401')) {
            } else {
                ToastAlerta('Erro ao deletar categoria.', 'error')
            }
        }    

        setIsLoading(false)
        retornar()
    }

    function retornar() {
        navigate("/categorias")
    }    

    return (
        
        <div className="container w-1/3 mx-auto">
            <h1 className="text-4xl text-center my-4">Deletar Categoria</h1>
            <p className="text-center font-semibold mb-4">
                Tem certeza que deseja deletar a categoria abaixo?</p>
            <div className="border flex flex-col rounded-r-2xl overflow-hidden justify-between">
                <header
                    className="py-2 px-6 bg-blue-600 text-white font-bold text-2xl">
                    Categoria</header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
                <div className="flex">
                    <button
                        className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2"
                        onClick={retornar}>Não</button>
                    <button 
                        className="w-full text-slate-100 bg-blue-400
                                 hover:bg-indigo-600 flex items-center justify-center"
                                 onClick={deletarCategoria}>

                        { isLoading ?
                            <ClipLoader
                                color="#ffffff"
                                size={24}
                            /> :
                                <span>Sim</span>
                        }
                                
                    </button>        
                </div>    
            </div>    
        </div>

    )
}

export default DeletarCategoria