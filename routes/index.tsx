import { Head } from "$fresh/runtime.ts";
import { useSignal } from "@preact/signals";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <Head>
        <title>conhecaoespiritosanto</title>
      </Head>
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
