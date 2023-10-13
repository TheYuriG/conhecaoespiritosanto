// Cria um título com fonte maior
export function Title({ content }: { content: string }) {
  return (
    <h1 class="my-4 mx-2 text-4xl text-center font-bold text-rosa font-agba text-shadow-azul-escuro">
      {content}
    </h1>
  );
}
