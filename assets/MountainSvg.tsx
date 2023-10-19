// Exporta um componente de um SVG de um ícone de montanha. Permite customização de classes e a cor do contorno. Extraído de TablerIcons.
export function MountainSvg(
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
      <path d="M3 20h18l-6.921 -14.612a2.3 2.3 0 0 0 -4.158 0l-6.921 14.612z">
      </path>
      <path d="M7.5 11l2 2.5l2.5 -2.5l2 3l2.5 -2"></path>
    </svg>
  );
}
