// Tipos e enums
import type { RouteContainerProperties } from "../types/RouteContainerProperties.ts";
import { RouteEntertainmentEnum } from "../types/RouteEntertainmentEnum.ts";
import { RouteRegionsEnum } from "../types/RouteRegionsEnum.ts";

// Exporta uma lista simulada de rotas de viagem no Estado
export const routesSummaryList: RouteContainerProperties[] = [
  {
    destinationImageLink:
      "https://images.unsplash.com/photo-1534104275488-7ba96ed1a2f6?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    destinationName: "Grande Buda",
    destinationLinkSlug: "grande-buda",
    destinationRegion: RouteRegionsEnum.NORTE,
    destinationType: RouteEntertainmentEnum.PONTO_TURISTICO,
    isDestinationFree: true,
  },

  {
    destinationImageLink:
      "https://redesoberano.com.br/wp-content/uploads/2021/06/As-praias-mais-proximas-do-Centro-de-Porto-Seguro.jpg.webp",
    destinationName: "Itaúnas",
    destinationLinkSlug: "praia-itaunas",
    destinationRegion: RouteRegionsEnum.NORTE,
    destinationType: RouteEntertainmentEnum.PRAIA,
    isDestinationFree: true,
  },
];
