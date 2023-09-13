// SVG do contorno do estado do Espírito Santo
import { EsSvg } from "../assets/EsSvg.tsx";

// Exporta o componente do banner da home page
export function HomeBanner() {
  return (
    <div class="px-4 py-8 h-screen bg-azul">
      {/* Linha com texto e icone do estado */}
      <div class="mx-2 md:mx-4 h-full flex items-center justify-center">
        {/* Coluna com Título e Texto */}
        <div class="px-4 py-2 lg:ml-16 flex flex-col items-center justify-center rounded-lg bg-branco">
          {/* Título */}
          <h1 class="text-4xl font-bold text-rosa font-agba text-shadow-azul-claro">
            Vamos conhecer o Espírito Santo?
          </h1>
          {/* Texto */}
          <p class="my-2 text-lg font-rubik">
            Do Norte ao Sul, o Espírito Santo guarda diversas surpresas para te
            surpreender! Preparado para descobrir o quanto você conhece deste
            pedacinho do Sudeste?
          </p>
        </div>
        {/* Ícone do estado */}
        <EsSvg
          stroke="blue"
          classes="shrink-0 w-[10em] sm:w-[20em] lg:w-[30em] ml-4"
        />
      </div>
    </div>
  );
}
