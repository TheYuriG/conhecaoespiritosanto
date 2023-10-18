// Exporta um componente de um SVG de uma taça meio cheia. Permite customização de classes e a cor do contorno. Extraído de TablerIcons.
export function GlassSvg(
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
      <path d="M8 21l8 0" />
      <path d="M12 15l0 6" />
      <path d="M17 3l1 7c0 3.012 -2.686 5 -6 5s-6 -1.988 -6 -5l1 -7h10z" />
      <path d="M6 10a5 5 0 0 1 6 0a5 5 0 0 0 6 0" />
    </svg>
  );
}