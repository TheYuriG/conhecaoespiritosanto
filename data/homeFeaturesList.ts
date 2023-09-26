// Tipo JSX para definir interface
import { JSX } from "preact";
// Importar cores para pintar SVGs
import { colors } from "./colors.ts";

// SVGs
import { BeachSvg } from "../assets/BeachSvg.tsx";
import { MountainSvg } from "../assets/MountainSvg.tsx";
import { RoadSvg } from "../assets/RoadSvg.tsx";
import { UsersSvg } from "../assets/UsersSvg.tsx";
import { GasStationSvg } from "../assets/GasStationSvg.tsx";

// Define interface de tipos para arquivo exportado
interface HomeFeaturesInterface {
  icon: JSX.Element;
  subtitle: string;
  text: string;
}

// Exporta uma lista de componentes para criar o espaço de funções na home page
export const homeFeaturesList: HomeFeaturesInterface[] = [{
  icon: BeachSvg({ stroke: colors["azul-escuro"] }),
  subtitle: "As melhores praias",
  text:
    "Barra Nova, Castelhanos, Coqueiral de Aracruz, Falésias, Itaúnas, Padres, Praia da Costa, Setiba, Três Praias, Urusaquara, e muito mais.",
}, {
  icon: MountainSvg({ stroke: colors["azul-escuro"] }),
  subtitle: "10+ Rotas registradas",
  text:
    "Diversos roteiros turísticos registrados de Norte ao Sul, incluindo monumentos históricos, praias, montanhas, pousadas e barzinhos.",
}, {
  icon: RoadSvg({ stroke: colors["azul-escuro"] }),
  subtitle: "Melhores caminhos",
  text:
    "Estradas com melhores condições de conservação são marcadas como rotas preferenciais.",
}, {
  icon: UsersSvg({ stroke: colors["azul-escuro"] }),
  subtitle: "Diversão para todos",
  text:
    "Aproveite programações para qualquer tamanho de grupo. De passeios individuais a famílias com crianças, tem de tudo.",
}, {
  icon: GasStationSvg({ stroke: colors["azul-escuro"] }),
  subtitle: "Pontos de apoio",
  text:
    "Para os grupos que preferem viajar com seu próprio carro, temos postos de gasolina, restaurantes e pousadas mapeados em todas as rotas.",
}];
