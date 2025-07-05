"use client";
import { FiArrowLeft, FiSearch, FiFilter } from "react-icons/fi";
import Link from "next/link";

// Aqui é sua tela em branco!
// A tela de explorar é o ponto inicial para o Coding Challenge. Boa Sorte!
export default function Explorar() {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      {/* Header */}
      <header className="flex items-center px-4 pb-2 pt-4">
        <Link href="/">
          <button className="mr-2 text-[#246B3F] text-2xl flex items-center justify-center h-full">
            <FiArrowLeft />
          </button>
        </Link>
        <h1 className="flex-1 flex items-center justify-center text-[#246B3F] text-2xl font-bold h-full">Explorar</h1>
        <div className="w-8" />
      </header>

      {/* Search bar */}
      <div className="px-4 pt-2 pb-2 bg-white">
        <div className="flex items-center bg-white border border-gray-300 rounded-full px-4 py-2">
            <FiSearch size={20} color="#9ca3af" />
          <input
            type="text"
            placeholder="Pesquisar"
            className="bg-transparent outline-none flex-1 text-gray-700 placeholder-gray-400 text-base ml-2"
          />
        </div>
      </div>

      {/* Seção do conteúdo */}
      <div className="bg-gray-50 flex-1 flex flex-col items-end px-4 py-3 mt-2 rounded-t-2xl">
        <button className="flex items-center gap-1 bg-white text-[#246B3F] font-semibold px-3 py-1 rounded-lg text-base border-1 border-[#246B3F] hover:bg-gray-100 active:scale-98 transition-transform duration-75">
          Filtrar
          <FiFilter size={20} color="#246B3F" />
        </button>
      </div>
    </div>
  );
}
