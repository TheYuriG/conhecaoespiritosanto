// Importar JSX para definir elementos filhos
import { JSX } from "preact";

// Define propriedades opcionais e obrigatórias desse componente
interface cardProperties {
  height?: string;
  width?: string;
  backgroundColor: string;
  shadowColor: string;
  children: JSX.Element[];
}

// Exporta um cartão padronizado que envolve conteúdo interno
export function Card(
  { height, width, backgroundColor, shadowColor, children }: cardProperties,
) {
  return (
    <div
      class={`px-4 py-2 ${height ? `h-[${height}]` : ""} ${
        width ? `w-[${width}]` : ""
      } flex flex-col items-center justify-around rounded-lg bg-${backgroundColor} shadow-xl shadow-${shadowColor}`}
    >
      {...children}
    </div>
  );
}
