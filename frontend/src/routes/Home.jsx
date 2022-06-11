import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="p-10 flex items-center">
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex-wrap ml-5">
          <img className="w-full" src="courses.jpg" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Cursos</div>
            <p className="text-gray-700 text-base">
              Faça sua matrícula nos melhores cursos disponibilizados por nossa
              instituição e estude com os melhores professores da sua região.
              Acesse o painel de cursos!
            </p>
          </div>
          <div className="px-6 pt-2 pb-2">
            <Link to="/cursos">
              <button className="mb-2 w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Acessar cursos
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex-wrap mx-10">
          <img className="w-full" src="students.jpg" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Alunos</div>
            <p className="text-gray-700 text-base">
              Acesse o painel de alunos para poder criar, listar editar e
              remover alunos desta instituição, verifique todas as informações
              dos alunos do seu curso!
            </p>
          </div>
          <div className="px-6 pt-2 pb-2">
            <Link to="/alunos">
              <button className="mb-2 w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Espaço do Aluno
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex-wrap">
          <img className="w-full" src="matricula.jpg" />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Matrículas</div>
            <p className="text-gray-700 text-base">
              Acesse o painel de matrículas para poder criar, listar editar e
              remover matrículas desta instituição, verifique todas as
              informações das matrículas!
            </p>
          </div>
          <div className="px-6 pt-2 pb-2">
            <Link to="/matriculas">
              <button className="mb-2 w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
                Verificar matrículas
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
