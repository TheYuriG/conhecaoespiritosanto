// Cria um subtítulo com fonte maior
export function Subtitle({ content }: { content: string }) {
  return (
    <h2 class="text-2xl font-bold text-rosa font-agba text-shadow-azul-escuro">
      {content}
    </h2>
  );
}
