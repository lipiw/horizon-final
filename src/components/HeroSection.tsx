import React from "react";
import axios from "axios";
import NextLink from "next/link";
import { useState } from "react";
import { useRouter } from 'next/router';

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';

export function HeroSection() {
  const [username, setUsername] = useState("");
  const [senha, setSenha] = useState("");

  const route = useRouter();

  const handleLogin = () => {
    axios
      .post("https://pjpw.vercel.app/login", {
        username: username,
        password: senha,
      })
      .then(function () {
        const notifySuccess = () => toast("Entrando no sistema!");
        notifySuccess();
        route.push("/products");
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
      <div className="hidden sm:mb-8 sm:flex sm:justify-center">
        <div className="mb-12 relative rounded-full px-3 py-1 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
          Tire suas dúvidas sobre artistas ou eventos{' '}
          <a target="_blank" href="https://bard.google.com/chat" className="font-semibold text-indigo-600">
            <span className="absolute inset-0" aria-hidden="true" />
            Pergunte ao Bard <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </div>

      {/* <img src="avatar.png" alt="Avatar" className="relative top-0" /> */}

      <div className="text-center">
        <h1 className="text-4xl select-none cursor-default font-bold tracking-tight text-gray-900 hover:text-indigo-600 sm:text-6xl">
          Horizon
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Alimentando sua imaginação, transformando festas em realidade: Bem-vindo ao <b>Horizon</b>, onde suas ideias
          de eventos se tornam festas inesquecíveis.
        </p>
        <div className="my-10 flex items-center justify-center gap-x-6">
          <div className="flex gap-4">
            <input
              type="text"
              id="website-admin"
              className="w-full min-w-0 rounded-lg border  bg-gray-50 p-2.5 text-sm text-gray-400"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="username"
            />
            <input
              type="password"
              id="website-admin"
              className="w-full min-w-0 rounded-lg border  bg-gray-50 p-2.5 text-sm text-gray-400"
              onChange={(e) => setSenha(e.target.value)}
              placeholder="password"
            />
          </div>
        </div>
        <a
          className="rounded-md cursor-pointer bg-indigo-600 px-10 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={handleLogin}
        >
          Entrar
        </a>
        <NextLink
          href="/register"
          className="my-14 flex cursor-pointer items-center justify-center text-sm font-semibold leading-6 text-gray-900"
        >
          Não tem cadastro? <span aria-hidden="true">→</span>
        </NextLink>
      </div>
    </section>
  );
}
