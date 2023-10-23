// HTML Head para importar CSS e fontes
import { Head } from "$fresh/runtime.ts";
import { toChildArray } from "preact";
import { JSX } from "preact/jsx-runtime";

// Propriedades deste componente
interface HeadOptions {
  title: string;
  description: string;
  link?: string;
  imageLink?: string;
  children: JSX.Element | JSX.Element[];
}

// Cria um componente de Head para ser exportado e usado em todas as páginas
export function CustomHead(
  {
    title,
    description,
    imageLink,
    link,
    children,
  }: HeadOptions,
) {
  return (
    <>
      <Head>
        <title>{title} | Conheça o Espírito Santo</title>
        <meta property="og:title" content={title} />
        <meta property="og:site_name" content="Conheça o Espírito Santo" />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="blog" />
        <meta
          property="og:url"
          content={"https://www.conhecaoespiritosanto.com.br" + (link ?? "")}
        />
        {imageLink &&
          (
            <meta
              property="og:image"
              content={imageLink}
            />
          )}
        <link rel="icon" type="image/x-icon" href="./favicon.ico"></link>
        <meta name="description" content={description} />
        {...toChildArray(children)}
      </Head>
      <body
        class="custom-scrollbar scroll-smooth min-h-screen flex flex-col"
        style='font-family: "Rubik"'
      >
      </body>
    </>
  );
}
