import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <nav className="p-5 bg-white shadow md:flex md:items-center md:justify-between">
        <div>
          <span className="text-2xl font-semibold">
            <img className="h-10 inline" src="writ.logo.png" alt="WRIT"/>
          </span>
        </div>

        <ul className="md:flex md:items-center">
          <li className="mx-4">
            <Link to='/home'>
              <button className="text-xl hover:text-zinc-400 duration-500">Home</button>
            </Link>
          </li>
          <li className="mx-4">
            <Link to='/cursos'>
              <button className="text-xl hover:text-zinc-400 duration-500">Cursos</button>
            </Link>
          </li>
          <li className="mx-4">
            <Link to='/alunos'>
              <button className="text-xl hover:text-zinc-400 duration-500">Alunos</button>
            </Link>
          </li>
          <li className="mx-4">
            <Link to='/matriculas'>
              <button className="text-xl hover:text-zinc-400 duration-500">Matrículas</button>
            </Link>
          </li>
          <li className="mx-4">
            <Link to='/'>
              <button className="inline-block align-baseline font-bold text-sm text-blue-500 ring ring-blue-300 
              hover:ring-blue-500 outline outline-offset-2 outline-1 p-2 rounded">Sair</button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;