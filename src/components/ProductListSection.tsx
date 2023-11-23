import React, { useState } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import { useRouter } from "next/router";
import { useEffect } from 'react';
import Anitta from '../../src/img/anitta.jpg';
import LuisaSonza from '../../src/img/luisa-sonza.jpg';
import Mochakk from '../../src/img/mochakk.jpg';
import Veigh from '../../src/img/veigh.jpg';
import Vintage from '../../src/img/vintage.jpg';

export function ProductListSection() {
  const [Listing, setListing] = useState([]);
  const [artist, setArtist] = useState('');

  const router = useRouter();

  const [showModal, setShowModal] = React.useState(false);

  function searchArtist(artist = '') {
    setShowModal(false);

    const fetchData = async () => {
      const response = await fetch('https://pjpw.vercel.app/listar' + artist);
      const json = await response.json();
      setListing(json);
    };

    fetchData();
  }

  function handleEvent(id: string, title: string, datetime: string, venue: string, photo: string, description: string) {
    router.push({
      pathname: '/oneEvent',
      query: { 
        id: id, 
        title: title,
        datetime: datetime,
        venue: venue,
        photo: photo,
        description: description
      }})
  }

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://pjpw.vercel.app/listar');
      const json = await response.json();
      setListing(json);
    };

    fetchData();
  }, []);

  return (
    <section>
      <button
        className="bg-black text-white active:bg-black font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => searchArtist()}
      >
        Ver todos artistas
      </button>
      <button
        className="bg-black text-white active:bg-black font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Selecione artistas
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="p-4 border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-3xl font-semibold">Selecione seus artistas preferidos!</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>

                <div className="mb-10">
                  <form>
                    <div className="relative">
                      <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg
                          className="w-4 h-4 text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 20 20"
                        >
                          <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                          />
                        </svg>
                      </div>
                      <input
                        type="search"
                        onChange={(e) => setArtist(e.target.value)}
                        className="block w-full p-4 ps-10 text-sm gray-300 rounded-lg bg-gray-50"
                        placeholder="Digite o nome do seu artista"
                        required
                      />
                      <button
                        className="text-white absolute end-2.5 bottom-2.5 bg-indigo-500 hover:bg-indigo-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-blue-800"
                        onClick={() => searchArtist('?filtro=' + artist)}
                      >
                        Encontrar
                      </button>
                    </div>
                  </form>
                </div>
                <div className="relative p-6 flex-auto">
                  <p className="text-3xl mb-7">Recomendados</p>
                  <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="pb-3 sm:pb-4">
                      <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                          <Image width={20} height={20} className="w-20 h-20 rounded-full" src={Vintage} alt="Vintage Culture" />
                        </div>
                        <NextLink
                          href="/products?artista=Vintage Culture"
                          onClick={() => searchArtist('?filtro=Vintage Culture')}
                          className="flex-1 min-w-0"
                        >
                          <p className="text-sm font-medium text-gray-900 truncate">Vintage Culture</p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">Eletronica</p>
                        </NextLink>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                          <Image width={20} height={20} className="w-20 h-20 rounded-full" src={Mochakk} alt="Mochakk" />
                        </div>
                        <NextLink onClick={() => searchArtist('?filtro=Mochakk')} href="/products?artista=Mochakk" className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">Mochakk</p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">Eletronica</p>
                        </NextLink>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                          <Image width={20} height={20} className="w-20 h-20 rounded-full" src={Veigh} alt="Veigh" />
                        </div>
                        <NextLink onClick={() => searchArtist('?filtro=Veigh')} href="/products?artista=Veigh" className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">Veigh</p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">Trap</p>
                        </NextLink>
                      </div>
                    </li>
                    <li className="py-3 sm:py-4">
                      <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                          <Image width={20} height={20} className="w-20 h-20 rounded-full" src={Anitta} alt="Anitta" />
                        </div>
                        <NextLink onClick={() => searchArtist('?filtro=Anitta')} href="/products?artista=Anitta" className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">Anitta</p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">Pop</p>
                        </NextLink>
                      </div>
                    </li>
                    <li className="pt-3 pb-0 sm:pt-4">
                      <div className="flex items-center space-x-4 rtl:space-x-reverse">
                        <div className="flex-shrink-0">
                          <Image width={20} height={20} className="w-20 h-20 rounded-full" src={LuisaSonza} alt="Luisa Sonza" />
                        </div>
                        <NextLink
                          onClick={() => searchArtist('?filtro=Luisa Sonza')}
                          href="/products?artista=Luisa Sonza"
                          className="flex-1 min-w-0"
                        >
                          <p className="text-sm font-medium text-gray-900 truncate">Luisa Sonza</p>
                          <p className="text-sm text-gray-500 truncate dark:text-gray-400">Pop</p>
                        </NextLink>
                      </div>
                    </li>
                  </ul>
                </div>
                {/*footer*/}
                <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    Fechar
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}

      <h1 className="select-none cursor-default my-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl hover:text-indigo-600">
        Eventos
      </h1>
      <div className="mb-10 mt-24 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8">
        {Listing.map(({ id, title, datetime, venue, photo, description }: any) => (
          <article key={id} className="cursor-pointer relative overflow-hidden rounded-lg shadow transition hover:shadow-lg">
            <a onClick={() => handleEvent(id, title, datetime, venue, photo, description)}>
              <img alt="Office" className="absolute inset-0 h-full w-full object-cover" src={photo} />

              <div className="relative bg-gradient-to-t from-gray-900/50 to-gray-900/25 pt-32 sm:pt-48 lg:pt-64">
                <div className="p-4 sm:p-6">
                  <span className="block text-xs text-white/90">{datetime}</span>

                  <h3 className="mt-0.5 text-lg text-white">{title}</h3>

                  <p className="mt-2 line-clamp-3 text-sm/relaxed text-white/95">{venue.street}</p>
                </div>
              </div>
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
