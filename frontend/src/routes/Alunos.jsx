import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Alunos = () => {
  const [loading, setLoading] = useState(true);
  const [alunos, setAlunos] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/alunos`).then((res) => {
      if (res.status === 200) {
        setAlunos(res.data.alunos);
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <h1 className="text-white">Carregando dados do aluno...</h1>;
  } else {
    var aluno_HTMLTABLE = "";

    aluno_HTMLTABLE = alunos.map((item, index) => {
      return (
        <tr key={index}>
          <td className="border px-4 py-2">{item.id}</td>
          <td className="border px-4 py-2">{item.nome}</td>
          <td className="border px-4 py-2">{item.email}</td>
          <td className="border px-4 py-2">{item.dt_nascimento}</td>
          <td className="border px-4 py-2">{item.created_at}</td>
          <td className="border px-4 py-2">
            <Link
              to={`edit-alunos/${item.id}`}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Editar
            </Link>
          </td>
          <td className="border px-4 py-2">
            <button
              type="button"
              onClick={(e) => deleteStudent(e, item.id)}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Deletar
            </button>
          </td>
        </tr>
      );
    });
  }
  return (
    <div>
      <Navbar />
      <h2 className="mt-6 ml-96 text-3xl font-semibold text-white">
        Dados do aluno
      </h2>
      <div className="container mx-auto">
        <div className="p-5">
          <Link
            to={"add-alunos"}
            className="ml-32 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Adicionar aluno
          </Link>
        </div>
        <div className="">
          <table className="table-auto bg-white rounded-lg ml-32">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Nome</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Data de nascimento</th>
                <th className="px-4 py-2">Data de criação</th>
                <th className="px-4 py-2">Editar</th>
                <th className="px-4 py-2">Deletar</th>
              </tr>
            </thead>
            <tbody>{aluno_HTMLTABLE}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Alunos;
