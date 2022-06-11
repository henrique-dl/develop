import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Cursos = () => {
  const [loading, setLoading] = useState(true);
  const [cursos, setCursos] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/cursos`).then((res) => {
      if (res.status === 200) {
        setCursos(res.data.curso);
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <h1 className="text-white">Carregando dados do curso...</h1>;
  } else {
    var curso_HTMLTABLE = "";

    curso_HTMLTABLE = cursos.map((item, index) => {
      return (
        <tr key={index}>
          <td className="border px-4 py-2">{item.id}</td>
          <td className="border px-4 py-2">{item.titulo}</td>
          <td className="border px-4 py-2">{item.descricao}</td>
          <td className="border px-4 py-2">{item.created_at}</td>
          <td className="border px-4 py-2">{item.updated_at}</td>
          <td className="border px-4 py-2">
            <Link
              to={`edit-cursos/${item.id}`}
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
        Dados do curso
      </h2>
      <div className="container mx-auto">
        <div className="p-5">
          <Link
            to={"add-cursos"}
            className="ml-32 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Adicionar curso
          </Link>
        </div>
        <div className="">
          <table className="table-auto bg-white rounded-lg ml-32">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">Titulo</th>
                <th className="px-4 py-2">Descricao</th>
                <th className="px-4 py-2">Data de criação</th>
                <th className="px-4 py-2">Data de atualização</th>
                <th className="px-4 py-2">Editar</th>
                <th className="px-4 py-2">Deletar</th>
              </tr>
            </thead>
            <tbody>{curso_HTMLTABLE}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Cursos;
