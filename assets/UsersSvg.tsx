// Exporta um componente de um SVG de um ícone de uma pessoa ou mais. Permite customização de classes e a cor do contorno. Extraído de TablerIcons.
export function UsersSvg(
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
      <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0"></path>
      <path d="M16 19h6"></path>
      <path d="M19 16v6"></path>
      <path d="M6 21v-2a4 4 0 0 1 4 -4h4"></path>
    </svg>
  );
}
