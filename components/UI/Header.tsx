// Importa botão primário para criar botão de rotas
import { PrimaryButton } from "./PrimaryButton.tsx";

// Exporta um cabeçalho fixo que segue a página durante o rolamento
export function Header() {
  return (
    <>
      <div class="h-16 w-[100dvw] px-4 fixed flex grow flex-row items-center justify-between bg-rosa-clarissimo/75">
        {/* Botão de home com nome da página */}
        <a
          href="/"
          class="px-4 py-2 font-agba text-xl font-bold text-rosa-escuro uppercase transition-transform hover:-translate-y-1"
        >
          Conheça o ES
        </a>
        {/* Botão de rotas */}
        <a
          href="/rotas"
          class="font-bold text-azul-escuro uppercase"
        >
          <PrimaryButton>
            Ver rotas
          </PrimaryButton>
        </a>
      </div>
      <div class="h-16 max-w-[100dvw] bg-rosa-clarissimo"></div>
    </>
  );
}
