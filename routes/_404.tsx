import { CustomHead } from "../components/CustomHead.tsx";
import { Title } from "../components/UI/Title.tsx";
import { colors } from "../data/colors.ts";
import { DeveloperIllustrationSvg } from "../illustrations/DeveloperIllustrationSvg.tsx";

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
