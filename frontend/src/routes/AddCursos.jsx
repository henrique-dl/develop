import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import swal from "sweetalert";

const AddCursos = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const saveCurso = async () => {
    await axios
      .post(`http://127.0.0.1:8000/api/cursos`, {
        titulo: titulo,
        descricao: descricao,
      })
      .then((res) => {
        if (res.data.status === 200) {
          swal("Success!", res.data.message, "success");
          setTitulo("");
          setDescricao("");
        }
      });
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center mt-12">
        <div className="w-full max-w-sm">
          <h2 className="my-6 text-center text-3xl font-semibold text-white">
            Adicionar curso
          </h2>
          <form className="shadow-md bg-white rounded px-8 pt-6 pb-8">
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Título
              </label>
              <input
                type="text"
                name="titulo"
                onChange={(e) => {
                  setTitulo(e.target.value);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-out"
              />
            </div>
            <div className="form-group mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Descrição
              </label>
              <input
                type="text"
                name="descricao"
                onChange={(e) => {
                  setDescricao(e.target.value);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-out"
              />
            </div>

            <div className="form-group mb-3">
              <button
                type="button"
                onClick={() => saveCurso()}
                className="w-full mt-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Salvar Curso
              </button>
            </div>
          </form>
          <div className="py-5">
            <Link
              to={"/cursos"}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              {" "}
              Voltar
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddCursos;
