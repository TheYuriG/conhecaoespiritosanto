import { CustomHead } from "../components/CustomHead.tsx";

export default function Home() {
  return (
    <>
      <CustomHead
        description="Bem vindo ao melhor site de turismo capixaba. Conheça os pontos turísticos mais importantes do estado e os diversos pontos de apoio que os rodeiam."
        title="Bem Vindo!"
        children={[]}
      />
      <div class="px-4 py-8 mx-auto bg-azul">
        <div class="max-w-screen-md mx-auto flex flex-col items-center justify-center">
          <h1 class="text-4xl font-bold">Welcome to fresh</h1>
          <p class="my-4">
            Try updating this message in the
            <code class="mx-2">./routes/index.tsx</code> file, and refresh.
          </p>
        </div>
      </div>
    </>
  );
}
