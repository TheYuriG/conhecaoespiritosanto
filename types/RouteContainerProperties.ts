// Enums com tipos de entretenimento e regiões do estado
import { RouteEntertainmentEnum } from "./RouteEntertainmentEnum.ts";
import { RouteRegionsEnum } from "./RouteRegionsEnum.ts";

// Exporta interface com as propriedades necessárias para criar um componente de contâiner de rota
export interface RouteContainerProperties {
  destinationImageLink: string;
  destinationName: string;
  destinationLinkSlug: string;
  destinationRegion: RouteRegionsEnum;
  destinationType: RouteEntertainmentEnum;
  isDestinationFree: boolean;
}
