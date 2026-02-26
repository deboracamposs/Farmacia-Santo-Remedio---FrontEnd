import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <div
        className="w-full flex justify-center py-4 bg-blue-800 text-white">
        <div className="container flex justify-between text-lg mx-8">
          <Link to="/home" className="text-2xl font-bold">
          Farmácia Online</Link>

          <div className="flex gap-4">
<<<<<<< HEAD
            <Link to='/categorias' className='hover:underline'>Lista Categorias</Link>
            <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar Categorias</Link>
=======
            Listar Categorias
            Cadastrar Categorias
>>>>>>> Home-navbar-footer
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;