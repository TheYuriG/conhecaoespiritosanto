// Head HTML com atributos para SEO
import { CustomHead } from "../../components/CustomHead.tsx";
// Componentes
import { RouteContainer } from "../../components/routes/RouteContainer.tsx";
// Sumário de rotas
import { routesSummaryList as routes } from "../../data/routesSummaryList.ts";

export default function Home() {
  return (
    <>
      {/* Head para SEO */}
      <CustomHead
        description="Todas as rotas registradas para viagens e passeios dentro do estado do Espírito Santo."
        title="Rotas"
        children={[]}
      />
      <ul class="bg-azul-clarissimo flex grow flex-wrap">
        {...routes.map((route) => (
          <RouteContainer
            destinationImageLink={route.destinationImageLink}
            destinationName={route.destinationName}
            destinationLinkSlug={route.destinationLinkSlug}
            destinationRegion={route.destinationRegion}
            destinationType={route.destinationType}
            isDestinationFree={route.isDestinationFree}
          />
        ))}
      </ul>
    </>
  );
}
