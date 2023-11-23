import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export function ProductSingleSection() {
  const router = useRouter();

  const id = router.query.id;
  const photo = router.query.photo;
  const title = router.query.title;
  const datetime = router.query.datetime;
  const venue = router.query.venue;
  const description = router.query.description;

  // Verifica se 'photo' é uma string e não está vazia
  const photoUrl =
    typeof photo === "string" && photo !== "" ? photo : "/placeholder.jpg";
  const idUrl = typeof id === "string" && id !== "" ? id : "/placeholder.jpg";

  return (
    <div className="mt-10 flex flex-col justify-between lg:flex-row gap-16 lg:items-center">
      <div className="flex flex-col gap-6 lg:w-2/4">
        <img
          className="aspect-square object-cover rounded-xl"
          src={photoUrl}
          alt="Imagem do produto"
        />
      </div>
      <div className="flex flex-col gap-4 lg:w-2/4">
        <div>
          <span className=" text-violet-600 font-semibold">{venue}</span>
          <h1 className="text-3xl font-bold mt-4">{title}</h1>
        </div>
        <p className="text-gray-700">
          Prepare-se para um evento inesquecível! Este evento promete ser uma
          experiência única, repleta de momentos emocionantes e oportunidades de
          aprendizado. Seja você um entusiasta, um profissional ou simplesmente
          alguém em busca de uma experiência nova e emocionante, este evento tem
          algo para todos. Venha e junte-se a nós para uma celebração de ideias,
          inspirações e conexões interpessoais. Não perca a chance de fazer
          parte desta experiência incrível!
        </p>
        <h6 className="text-2xl font-semibold mt-5">{datetime}</h6>
        <a
          href={idUrl}
          target="_blank"
          className="mt-10 bg-violet-800 text-white font-semibold text-center py-3 px-16 rounded-xl h-full"
        >
          Acessar evento
        </a>

        <Link
          href="/products"
          className="border text-black font-semibold text-center py-3 px-16 rounded-xl h-full"
        >
          Retornar para lista de eventos
        </Link>
      </div>
    </div>
  );
}
