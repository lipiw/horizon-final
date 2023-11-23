// import { NextLink } from 'ne';
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/router";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

export function RegisterSection() {
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");
  const [email, setEmail] = useState("");

  const router = useRouter();

  const handleRegister = () => {
    axios
      .post("https://pjpw.vercel.app/registro", {
        username: username,
        password: senha,
      })
      .then(function () {
        const notifySuccess = () => toast("Entrando no sistema!");
        notifySuccess();
        router.push("/products");
      })
      .catch(function (error) {
        console.error("Error:", error);
        if (error.response && (error.response.status === 401 || error.response.status === 400)) {
          const notifyError = () => toast(error.response.data.message);
          notifyError();
        } else {
          const notifyError = () => toast("Ocorreu um erro");
          notifyError();
        }
      });
  };

  return (
    <section className="mx-auto max-w-2xl py-10 sm:py-12 lg:py-24">
      <ToastContainer />
      <div className="text-center">
        <h1 className="text-4xl select-none cursor-default font-bold tracking-tight text-gray-900 hover:text-indigo-600 sm:text-6xl">
          Cadastro
        </h1>
        <div className="flex flex-col my-10 justify-center gap-6">
          <div className="flex flex-col gap-4">
            <input
              type="text"
              id="website-admin"
              className="w-full min-w-0 rounded-lg border  bg-gray-50 p-2.5 text-sm text-gray-400"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              id="website-admin"
              className="w-full min-w-0 rounded-lg border  bg-gray-50 p-2.5 text-sm text-gray-400"
              placeholder="Senha"
              onChange={(e) => setSenha(e.target.value)}
            />
            <input
              type="email"
              id="website-admin"
              className="w-full min-w-0 rounded-lg border  bg-gray-50 p-2.5 text-sm text-gray-400"
              placeholder="E-mail"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <a
            // href="/"
            className="rounded-md cursor-pointer bg-indigo-600 px-10 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            onClick={handleRegister}
          >
            Cadastrar
          </a>
        </div>
      </div>
    </section>
  );
}
