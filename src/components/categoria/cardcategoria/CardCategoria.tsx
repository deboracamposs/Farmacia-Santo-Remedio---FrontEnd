import { Link } from 'react-router-dom'
import type Categoria from '../../../models/Categoria'

interface CardCategoriaProps{
    categoria: Categoria
}

function CardCategoria({ categoria }: CardCategoriaProps) {
    return (
        <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
            <header className='py-2 px-6 bg-blue-800 text-white font-bold text-2xl'>
                {categoria.descricao}
            </header>
            <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.descricao}</p>
            
            <div className="flex">
                <Link to={`/editarcategoria/${categoria.id}`} 
                    className='w-full text-slate-100 bg-blue-400 hover:bg-blue-800 
                        flex items-center justify-center py-2'>
                    Editar
                </Link>

                <Link to={`/deletarcategoria/${categoria.id}`} 
                    className='text-slate-100 bg-red-400 hover:bg-red-700 w-full 
                    flex items-center justify-center'>
                    Deletar
                </Link>
            </div>

        </div>
    )
}

export default CardCategoria