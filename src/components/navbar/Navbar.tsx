import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div
        className="w-full flex justify-center py-4 bg-blue-800 text-white">
        <div className="container flex justify-between text-lg mx-8">
          <Link to="/home" className="text-2xl font-bold">
            Farmácia Santo Remédio
          </Link>

          <div className="flex gap-4">
            <Link to='/categorias' className='hover:underline'>Lista Categorias</Link>
            <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categorias</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;