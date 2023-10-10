import { LayoutProps } from "$fresh/server.ts";
// Rodapé a ser adicionado a todas as páginas
import Footer from "../components/UI/Footer.tsx";

// Cria um layout comum que injeta conteúdo de páginas acessadas
export default function Layout({ Component }: LayoutProps) {
  return (
    <>
      <Component />
      <Footer />
    </>
  );
}
