import React, { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";
import swal from "sweetalert";

const AddAlunos = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [dtNascimento, setDtNascimento] = useState("");

  const saveAluno = async () => {
    await axios
      .post(`http://127.0.0.1:8000/api/alunos`, {
        nome: nome,
        email: email,
        dt_nascimento: dtNascimento,
      })
      .then((res) => {
        console.log(res);
        if (res.data.status === 200) {
          swal("Success!", res.data.message, "success");
          setNome("");
          setEmail("");
        }
      });
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-wrap justify-center mt-12">
        <div className="w-full max-w-sm">
          <h2 className="my-6 text-center text-3xl font-semibold text-white">
            Adicionar aluno
          </h2>
          <form className="shadow-md bg-white rounded px-8 pt-6 pb-8">
            <div className="mb-5">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Nome
              </label>
              <input
                type="text"
                name="nome"
                onChange={(e) => {
                  setNome(e.target.value);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-out"
              />
            </div>
            <div className="form-group mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-out"
              />
            </div>
            <div className="form-group mb-3">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Data de nascimento
              </label>
              <input
                type="text"
                name="dt_nascimento"
                onChange={(e) => {
                  setDtNascimento(e.target.value);
                }}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-out"
              />
            </div>

            <div className="form-group mb-3">
              <button
                type="button"
                onClick={() => saveAluno()}
                className="w-full mt-5 bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Salvar Aluno
              </button>
            </div>
          </form>
          <div className="py-5">
            <Link
              to={"/alunos"}
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

export default AddAlunos;
