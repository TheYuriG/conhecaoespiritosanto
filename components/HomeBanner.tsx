// SVG do contorno do estado do Espírito Santo
import { EsSvg } from "../assets/EsSvg.tsx";
// Abstração de um Card
import { Card } from "./UI/Card.tsx";
// Paleta de cores do site
import { colors } from "../data/colors.ts";
// Componente de título
import { Title } from "./UI/Title.tsx";

// Exporta o componente do banner da home page
export function HomeBanner() {
  return (
    <div class="px-4 py-8 h-screen bg-azul">
      {/* Linha com texto e icone do estado */}
      <div class="mx-2 md:mx-4 h-full flex items-center justify-center">
        {/* Coluna com Título e Texto */}
        <Card backgroundColor="azul-clarissimo" shadowColor="rosa-escuro">
          {/* Título */}
          <Title content="Vamos conhecer o Espírito Santo?" />
          {/* Texto */}
          <p class="my-2 text-lg font-rubik">
            Do Norte ao Sul, o Espírito Santo guarda diversas surpresas para te
            surpreender! Preparado para descobrir o quanto você conhece deste
            pedacinho do Sudeste?
          </p>
        </Card>
        {/* Ícone do estado */}
        <EsSvg
          stroke={colors["azul-escuro"]}
          classes="shrink-0 w-[10em] sm:w-[20em] lg:w-[30em] ml-4"
        />
      </div>
    </div>
  );
}
