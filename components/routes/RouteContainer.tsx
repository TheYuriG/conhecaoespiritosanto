// Componentes
import { Subtitle } from "../UI/Subtitle.tsx";
import { RouteRegion } from "./RouteRegion.tsx";
import { RouteEntertainmentType } from "./RouteEntertainmentType.tsx";
import { RouteIsFree } from "./RouteIsFree.tsx";
// Tipos
import type { RouteContainerProperties } from "../../types/RouteContainerProperties.ts";

// Exporta um componente de rota com informações de região, tipo de rota e entrada gratuita/paga
export function RouteContainer(
  {
    destinationImageLink,
    destinationName,
    destinationLinkSlug,
    destinationRegion,
    destinationType,
    isDestinationFree,
  }: RouteContainerProperties,
) {
  return (
    <li class="list-none">
      <a
        href={"/rotas/" + destinationLinkSlug}
        class="bg-rosa-clarissimo transition-shadow-rosa-azul flex flex-col h-min w-[300px] pb-3 m-4 rounded-lg overflow-hidden"
      >
        <img
          src={destinationImageLink}
          height="200px"
          width="300px"
          class="object-cover h-[200px] w-[300px]"
        />
        <Subtitle content={destinationName} />
        <div class="mt-3 mx-2 flex flex-col gap-0.5">
          <RouteRegion region={destinationRegion} />
          <RouteEntertainmentType entertainment={destinationType} />
          <RouteIsFree free={isDestinationFree} />
        </div>
      </a>
    </li>
  );
}
