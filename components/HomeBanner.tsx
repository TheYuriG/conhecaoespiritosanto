// SVG do contorno do estado do Espírito Santo
import { EsSvg } from "../assets/EsSvg.tsx";
// Abstração de um Card
import { Card } from "./UI/Card.tsx";
// Paleta de cores do site
import { colors } from "../data/colors.ts";
// Componente de título
import { Title } from "./UI/Title.tsx";
// Divisor em onda entre componentes
import { DividerWaveOneSvg } from "../assets/DividerWaveOneSvg.tsx";

// Exporta o componente do banner da home page
export function HomeBanner() {
  return (
    <div class="h-screen bg-azul pt-4 flex flex-col items-center">
      {/* Linha com texto e icone do estado */}
      <div class="mx-2 md:mx-4 max-w-[1080px] flex flex-col sm:flex-row flex-grow items-center justify-center">
        {/* Coluna com Título e Texto */}
        <Card backgroundColor="azul-clarissimo" shadowColor="rosa-escuro">
          {/* Título */}
          <Title content="Vamos conhecer o Espírito Santo?" />
          {/* Texto */}
          <p class="my-2 text-lg">
            Do Norte ao Sul, o Espírito Santo guarda diversas surpresas para te
            surpreender! Preparado para descobrir o quanto você conhece deste
            pedacinho do Sudeste?
          </p>
        </Card>
        {/* Ícone do estado */}
        <EsSvg
          stroke={colors["azul-escuro"]}
          classes="shrink-0 mt-4 sm:mt-0 w-[20em] lg:w-[30em] ml-4"
        />
      </div>
      {/* Divisor de onda */}
      <DividerWaveOneSvg fill={colors["azul-claro"]} />
    </div>
  );
}
