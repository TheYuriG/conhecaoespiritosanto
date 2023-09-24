// Exporta um componente de um SVG de um ícone de estrada. Permite customização de classes e a cor do contorno. Extraído de TablerIcons.
export function RoadSvg(
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
      <path d="M4 19l4 -14"></path>
      <path d="M16 5l4 14"></path>
      <path d="M12 8v-2"></path>
      <path d="M12 13v-2"></path>
      <path d="M12 18v-2"></path>
    </svg>
  );
}
