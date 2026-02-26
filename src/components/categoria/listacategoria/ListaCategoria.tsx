/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import CardCategoria from "../cardcategoria/CardCategoria";
import { SyncLoader } from "react-spinners";
import { ToastAlerta } from "../../../utils/ToastAlerta";

function ListaCategorias() {
    const [categorias, setCategorias] = useState<Categoria[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    async function buscarCategorias() {
        try {
            await buscar('/categorias', setCategorias);
        } catch (error: any) {
            ToastAlerta('Erro ao listar as categorias.', 'error')
        } finally {
            setIsLoading(false);
        }
    }

    useEffect(() => {
        buscarCategorias();
    }, []);

    return (
    <>
        {isLoading ? (
            /* CAMINHO A: Se isLoading for TRUE, mostra o Loader */
            <div className="flex justify-center items-center w-full h-80">
                <SyncLoader color="#312e81" size={32} />
            </div>
        ) : (
            /* CAMINHO B: Se isLoading for FALSE, mostra o conteúdo */
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col mx-2">
                    
                    {categorias.length === 0 ? (
                        /* Sub-ternário: Se a lista estiver vazia */
                        <span className="text-3xl text-center my-8 text-slate-800">
                            Nenhuma Categoria foi encontrada!
                        </span>
                    ) : (
                        /* Sub-ternário: Se a lista tiver itens */
                        <div className='container mx-auto my-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                            {categorias.map((categoria) => (
                                <CardCategoria key={categoria.id} categoria={categoria} />
                            ))}
                        </div>
                    )}
                    
                </div>
            </div>
        )}
    </>
);
}

export default ListaCategorias;