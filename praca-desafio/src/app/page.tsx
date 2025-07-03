'use client';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-[#009440] text-white py-4 px-4 sm:py-6 sm:px-6">
        <div className="flex items-center justify-center gap-3">
          <Image src="/images/logo.png" alt="Logo Praça" width={40} height={40} className="w-13 h-13 sm:w-15 sm:h-15" />
          <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-center">
            Coding Challenge da Praça
          </h1>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-1 bg-white flex flex-col items-center justify-center p-4 sm:p-6 gap-6">
        <div className="text-center text-gray-700 text-base sm:text-lg lg:text-xl max-w-lg space-y-4">
          <p>
            Todas as informações necessárias para o desafio estão na <b>README</b> file nesse repositório. Qualquer dúvida ou problema que você tiver, entre em contato pelo email <b>apracadev@gmail.com</b>
          </p>
          <p>
            Boa sorte e dê o seu melhor! 💚
          </p>
        </div>
        <button 
          className="bg-[#009440] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-lg font-semibold text-base sm:text-lg lg:text-xl hover:bg-[#007a33] active:scale-99 transform transition-all duration-50 ease-in-out shadow-lg hover:shadow-xl"
        >
          Vamos explorar as Praças juntos?
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-[#009440] text-white text-center py-6 px-4 sm:py-8 sm:px-8 mt-auto text-sm sm:text-base border-t border-[#007a33] space-y-3 sm:space-y-4">
        <div>
          Para esse teste vamos focar na implementação para telas mobile. No entanto, responsividade não deve ser deixada de lado.
        </div>
        <div className="font-semibold text-yellow-200 bg-[#007a33]/40 rounded px-2 py-1 max-w-xl mx-auto">
          Não compartilhe sua implementação com outros candidatos. O compartilhamento de código pode levar à desclassificação do processo seletivo.
        </div>
        <div>
          © 2025 Praça. Todos os direitos reservados.
        </div>
      </footer>
    </div>
  );
}
