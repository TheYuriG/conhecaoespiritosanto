// Exporta um componente de um SVG de avião. Permite customização de classes e a cor do contorno. Extraído de TablerIcons.
export function PlaneSvg(
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
      <path d="M14.5 6.5l3 -2.9a2.05 2.05 0 0 1 2.9 2.9l-2.9 3l2.5 7.5l-2.5 2.55l-3.5 -6.55l-3 3v3l-2 2l-1.5 -4.5l-4.5 -1.5l2 -2h3l3 -3l-6.5 -3.5l2.5 -2.5l7.5 2.5z" />
    </svg>
  );
}
