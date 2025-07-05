"use client";
import { useEffect } from "react";
import { FiX } from "react-icons/fi";

interface FilterModalProps {
  open: boolean;
  onClose: () => void;
}

// Essa file implementa o modal de filtro que é exibido quando o usuário clica no botão de filtro na tela de explorar.
// O modal ocupa toda a largura da tela.
export default function FilterModal({ open, onClose }: FilterModalProps) {
  //Essa lógica evita que o scroll do fundo seja permitido quando o modal está aberto.
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/30"
      onClick={onClose}
    >
      <div
        className="w-screen bg-white rounded-t-2xl shadow-lg p-0"
        onClick={e => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative flex items-center px-6 pt-6 pb-4 border-b border-gray-100">
          <div className="flex-1 flex justify-center">
            <span className="font-bold text-xl text-[#246B3F]">Filtrar por</span>
          </div>
          <button onClick={onClose} className="absolute right-6 text-[#246B3F] text-2xl">
            <FiX />
          </button>
        </div>
        {/* Conteúdo do modal */}
        <div className="px-6 pt-4 pb-2">
          <div className="font-semibold text-gray-800 mb-3 text-base">Interesses</div>
          {/* Você deve implementar aqui a lista de interesses para o usuário selecionar */}
          <div style={{ height: 100 }} className="w-full" />
        </div>
        {/* Botões de ação do modal */}
        <div className="flex gap-2 px-6 pb-6 pt-2 justify-end">
          <button className="border-2 border-[#246B3F] text-[#246B3F] font-semibold px-4 py-1 rounded-full bg-white text-sm active:scale-98 transition-transform duration-75">
            Limpar
          </button>
          <button className="bg-gray-300 text-white font-semibold px-4 py-1 rounded-full text-sm cursor-not-allowed">
            Aplicar filtro
          </button>
        </div>
      </div>
    </div>
  );
}
