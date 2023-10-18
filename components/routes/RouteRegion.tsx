// SVGs
import { NorthSvg } from "../../assets/NorthSvg.tsx";
import { SouthSvg } from "../../assets/SouthSvg.tsx";
import { MountainSvg } from "../../assets/MountainSvg.tsx";
import { BuildingSvg } from "../../assets/BuildingSvg.tsx";
// Cores
import { colors } from "../../data/colors.ts";
// Enum com regiões do estado
import { RouteRegionsEnum } from "../../types/RouteRegionsEnum.ts";
// Classes CSS repetíveis entre componentes
import {
  routeSpanClasses,
  routeSvgClasses,
} from "../../data/routeComponentClasses.ts";

// Componentes possíveis de acordo com a região
/// {região: ComponenteJSX}
const routeRegionSvgs = {
  [RouteRegionsEnum.NORTE]: (
    <span
      title={RouteRegionsEnum.NORTE}
      class={routeSpanClasses}
    >
      <NorthSvg stroke={colors["azul"]} classes={routeSvgClasses} />{" "}
      {RouteRegionsEnum.NORTE}
    </span>
  ),
  [RouteRegionsEnum.SUL]: (
    <span
      title={RouteRegionsEnum.SUL}
      class="flex items-centeritems-center shrink-0"
    >
      <SouthSvg stroke={colors["azul"]} classes={routeSvgClasses} />{" "}
      {RouteRegionsEnum.SUL}
    </span>
  ),
  [RouteRegionsEnum.SERRANA]: (
    <span
      title={RouteRegionsEnum.SERRANA}
      class={routeSpanClasses}
    >
      <MountainSvg stroke={colors["azul"]} classes={routeSvgClasses} />{" "}
      {RouteRegionsEnum.SERRANA}
    </span>
  ),
  [RouteRegionsEnum.GRANDE_VITORIA]: (
    <span
      title={RouteRegionsEnum.GRANDE_VITORIA}
      class={routeSpanClasses}
    >
      <BuildingSvg stroke={colors["azul"]} classes={routeSvgClasses} />{" "}
      {RouteRegionsEnum.GRANDE_VITORIA}
    </span>
  ),
};

// Exporta um componente de região baseado no parâmetro fornecido
export function RouteRegion({ region }: { region: RouteRegionsEnum }) {
  return routeRegionSvgs[region];
}
