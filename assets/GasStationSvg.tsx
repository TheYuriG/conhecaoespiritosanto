// Exporta um componente de um SVG de um ícone de posto de gasolina. Permite customização de classes e a cor do contorno. Extraído de TablerIcons.
export function GasStationSvg(
  { stroke, classes }: { stroke: string; classes?: string },
) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      stroke-width="2"
      class={classes}
      fill="none"
      stroke={stroke}
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path d="M14 11h1a2 2 0 0 1 2 2v3a1.5 1.5 0 0 0 3 0v-7l-3 -3"></path>
      <path d="M4 20v-14a2 2 0 0 1 2 -2h6a2 2 0 0 1 2 2v14"></path>
      <path d="M3 20l12 0"></path>
      <path d="M18 7v1a1 1 0 0 0 1 1h1"></path>
      <path d="M4 11l10 0"></path>
    </svg>
  );
}
