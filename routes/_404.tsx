// Importa Head para adicionar metadados para SEO
import { CustomHead } from "../components/CustomHead.tsx";
// Importa componente de título
import { Title } from "../components/UI/Title.tsx";
// Importa esquema de cores do aplicativo
import { colors } from "../data/colors.ts";
// Importa ilustração de homem no computador
import { DeveloperIllustrationSvg } from "../illustrations/DeveloperIllustrationSvg.tsx";

// Exporta página de erro para código de resposta HTTP 404 NOT FOUND.
export default function Error404() {
  return (
    <>
      <CustomHead
        title="Página não encontrada"
        description="Essa página é mostrada quando o usuário tenta acessar uma página inexistente."
        link="/nao-encontrada"
      >
        <></>
      </CustomHead>
      <div class="px-4 py-8 mx-auto bg-azul-claro text-preto min-h-screen">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center gap-4">
          <DeveloperIllustrationSvg
            primaryColor={colors["azul-escuro"]}
            secondaryColor={colors["rosa-escuro"]}
            classes="bg-rosa-clarissimo border border-azul-escuro border-4 rounded rounded-lg p-2"
          />
          <Title content="404 - Página não encontrada" />
          <p>
            A página que você tentou acessar não existe.
          </p>
          <a href="/" class="underline">Voltar para página principal</a>
        </div>
      </div>
    </>
  );
}
