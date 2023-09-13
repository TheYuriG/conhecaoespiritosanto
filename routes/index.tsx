// Head HTML com atributos para SEO
import { CustomHead } from "../components/CustomHead.tsx";
// Banner da página inicial com CTA
import { HomeBanner } from "../components/HomeBanner.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        description="Bem vindo ao melhor site de turismo capixaba. Conheça os pontos turísticos mais importantes do estado e os diversos pontos de apoio que os rodeiam."
        title="Bem Vindo!"
        children={[]}
      />
      <HomeBanner />
    </>
  );
}
