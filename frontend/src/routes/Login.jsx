import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <img class="mx-auto h-12 w-auto mt-12" src="writ.logo.png" alt="WRIT" />
      <h2 class="mt-6 text-center text-3xl font-semibold text-white">
        Plataforma de cursos online
      </h2>
      <div className="flex flex-wrap justify-center mt-12">
        <div className="w-full max-w-sm">
          <form className="shadow-md bg-white rounded px-8 pt-6 pb-8">
            <div className="mb-5">
              <label
                htmlFor="usuario"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Usuário:
              </label>
              <input
                type="text"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-out"
                placeholder="Usuário"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="senha"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Senha:
              </label>
              <input
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-out"
                placeholder="Senha"
              />
            </div>
            <div className="flex items-center justify-between">
              <Link to="/home">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                  Entrar
                </button>
              </Link>
              <button
                type="button"
                className="inline-block align-baseline font-bold text-sm text-blue-500 ring ring-blue-300 hover:ring-blue-500 outline outline-offset-2 outline-1 p-2 rounded"
              >
                Recuperar senha
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
