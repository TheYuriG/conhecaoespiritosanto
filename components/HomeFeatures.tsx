// Subtítulos
import { Subtitle } from "./UI/Subtitle.tsx";
// Cartão padrão com sombra
import { Card } from "./UI/Card.tsx";
// Lista de funções da página
import { homeFeaturesList } from "../data/homeFeaturesList.ts";

// Exporta estatísticas
export function HomeFeatures() {
  return (
    <div class="px-4 py-8 bg-azul-claro">
      <div class="mx-2 md:mx-4 h-max flex flex-col md:flex-row flex-wrap gap-8 items-center justify-center">
        {/* Coluna com Título e Texto */}
        {...homeFeaturesList.map((feature) => (
          <Card
            backgroundColor="azul-clarissimo"
            shadowColor="azul-escuro"
            height="17em"
            width="20em"
          >
            {feature.icon}
            <Subtitle content={feature.subtitle} />
            <p class="my-2 flex grow-1 font-rubik">
              {feature.text}
            </p>
          </Card>
        ))}
      </div>
    </div>
  );
}
