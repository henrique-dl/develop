import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import React, { useEffect, useState } from "react";

const Matriculas = () => {
  const [loading, setLoading] = useState(true);
  const [matriculas, setMatriculas] = useState([]);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/matriculas`).then((res) => {
      if (res.status === 200) {
        setMatriculas(res.data);
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return <h1 className="text-white">Carregando dados da matrícula...</h1>;
  } else {
    var matricula_HTMLTABLE = "";

    matricula_HTMLTABLE = matriculas.map((item, index) => {
      return (
        <tr key={index}>
          <td class="border px-4 py-2">{item.id}</td>
          <td class="border px-4 py-2">{item.id_cursos}</td>
          <td class="border px-4 py-2">{item.id_alunos}</td>
          <td class="border px-4 py-2">{item.created_at}</td>
          <td class="border px-4 py-2">{item.updated_at}</td>
        </tr>
      );
    });
  }
  return (
    <div>
      <Navbar />
      <h2 class="mt-6 ml-96 text-3xl font-semibold text-white py-10">
        Dados da matrícula
      </h2>
      <div className="container mx-auto">
        <div className="">
          <table className="table-auto bg-white rounded-lg ml-32">
            <thead>
              <tr>
                <th className="px-4 py-2">ID</th>
                <th className="px-4 py-2">ID Cursos</th>
                <th className="px-4 py-2">ID Alunos</th>
                <th className="px-4 py-2">Data de criação</th>
                <th className="px-4 py-2">Data de atualização</th>
              </tr>
            </thead>
            <tbody>{matricula_HTMLTABLE}</tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Matriculas;
