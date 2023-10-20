// SVGs
import { ToriiSvg } from "../../assets/ToriiSvg.tsx";
import { BeachSvg } from "../../assets/BeachSvg.tsx";
import { HotelSvg } from "../../assets/HotelSvg.tsx";
import { RestaurantSvg } from "../../assets/RestaurantSvg.tsx";
import { GlassSvg } from "../../assets/GlassSvg.tsx";
// Cores
import { colors } from "../../data/colors.ts";
// Enum com regiões do estado
import { RouteEntertainmentEnum } from "../../types/RouteEntertainmentEnum.ts";
// Classes CSS repetíveis entre componentes
import {
  routeSpanClasses,
  routeSvgClasses,
} from "../../data/routeComponentClasses.ts";

// Componentes possíveis de acordo com o tipo de entretenimento
/// {tipoDeEntretenimento: ComponenteJSX}
const routeEntertainmentSvgs = {
  [RouteEntertainmentEnum.PONTO_TURISTICO]: (
    <span
      title={RouteEntertainmentEnum.PONTO_TURISTICO}
      class={routeSpanClasses}
    >
      <ToriiSvg
        stroke={colors["azul-escuro"]}
        classes={routeSvgClasses}
      />{" "}
      {RouteEntertainmentEnum.PONTO_TURISTICO}
    </span>
  ),
  [RouteEntertainmentEnum.PRAIA]: (
    <span
      title={RouteEntertainmentEnum.PRAIA}
      class={routeSpanClasses}
    >
      <BeachSvg
        stroke={colors["azul-escuro"]}
        classes={routeSvgClasses}
      />{" "}
      {RouteEntertainmentEnum.PRAIA}
    </span>
  ),
  [RouteEntertainmentEnum.HOSPEDAGEM]: (
    <span
      title={RouteEntertainmentEnum.HOSPEDAGEM}
      class={routeSpanClasses}
    >
      <HotelSvg
        stroke={colors["azul-escuro"]}
        classes={routeSvgClasses}
      />{" "}
      {RouteEntertainmentEnum.HOSPEDAGEM}
    </span>
  ),
  [RouteEntertainmentEnum.RESTAURANTE]: (
    <span
      title={RouteEntertainmentEnum.RESTAURANTE}
      class={routeSpanClasses}
    >
      <RestaurantSvg
        stroke={colors["azul-escuro"]}
        classes={routeSvgClasses}
      />{" "}
      {RouteEntertainmentEnum.RESTAURANTE}
    </span>
  ),
  [RouteEntertainmentEnum.VIDA_NOTURNA]: (
    <span
      title={RouteEntertainmentEnum.VIDA_NOTURNA}
      class={routeSpanClasses}
    >
      <GlassSvg
        stroke={colors["azul-escuro"]}
        classes={routeSvgClasses}
      />{" "}
      {RouteEntertainmentEnum.VIDA_NOTURNA}
    </span>
  ),
};

// Exporta um componente de entretenimento baseado no parâmetro fornecido
export function RouteEntertainmentType(
  { entertainment }: { entertainment: RouteEntertainmentEnum },
) {
  return routeEntertainmentSvgs[entertainment];
}
