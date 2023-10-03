// Importa esquema de cores
import { colors } from "../../data/colors.ts";
// Importa SVGs
import { EmailSvg } from "../../assets/EmailSvg.tsx";
import { InstagramSvg } from "../../assets/InstagramSvg.tsx";
import { PlaneSvg } from "../../assets/PlaneSvg.tsx";
import { TikTokSvg } from "../../assets/TikTokSvg.tsx";

// Menus e submenus do rodapé
const menus = [
  {
    title: "Viagens",
    icon: (
      <PlaneSvg
        stroke={colors["azul-escuro"]}
        classes="w-4 h-4 inline-block"
      />
    ),
    children: [
      { name: "Rotas registradas", href: "/rotas" },
      { name: "Pontos de apoio", href: "/pontos-de-apoio" },
      { name: "Parceiros", href: "/parceiros" },
    ],
  },
  {
    title: "Fale conosco",
    icon: (
      <EmailSvg stroke={colors["azul-escuro"]} classes="w-4 h-4 inline-block" />
    ),
    children: [
      {
        name: "Sugerir ponto turístico",
        href:
          "mailto:yuri@theyurig.com?subject=Sugestão%20de%20ponto%20turístico%20(Conhe%C3%A7a%20o%20Esp%C3%ADrito%20Santo)&body=Estava%20olhando%20o%20site%20e%20percebi%20que%20vocês%20não%20listavam%20um%20ponto%20turístico%20importante:%20",
      },
      {
        name: "Sugerir ponto de apoio",
        href:
          "mailto:yuri@theyurig.com?subject=Sugestão%20de%20ponto%20de%20apoio%20(Conhe%C3%A7a%20o%20Esp%C3%ADrito%20Santo)&body=Olá,%20a%20rota%20para%20LOCAL%20WWWWWW%20passa%20pelo%20estabelecimento%20ZZZZZZ,%20que%20eu%20acredito%20ser%20interessante%20incluir.",
      },
      {
        name: "Se torne um parceiro",
        href:
          "mailto:yuri@theyurig.com?subject=Proposta%20de%20parceria%20(Conhe%C3%A7a%20o%20Esp%C3%ADrito%20Santo)&body=Olá,%20gostaria%20de%20me%20tornar%20parceiro%20do%20site%20Conheça%20o%20Espírito%20Santo.%20Sou%20responsável%20pela%20empresa%20VVVVVV%20e%20gostaria%20de%20saber%20qual%20o%20valor%20para%20vocês%20nos%20colocarem%20em%20destaque%20nas%20suas%20rotas.",
      },
    ],
  },
];

export default function Footer() {
  return (
    <div class="bg-azul-clarissimo text-azul-escuro flex flex-col md:flex-row w-full gap-8 md:gap-16 px-8 py-8 text-sm">
      {/* Título */}
      <div class="flex-1">
        <div class="font-bold text-2xl">
          Conheça o Espírito Santo
        </div>
        <div class="text-gray-500">
          Há muito mais para ver e viver do que você imagina!
        </div>
      </div>

      {/* Menus e submenus em cascata */}
      {menus.map((item) => (
        <div class="mb-4" key={item.title}>
          {/*  */}
          <div class="font-bold">{item.icon} {item.title}</div>
          <ul class="mt-2">
            {item.children.map((child) => (
              <li class="mt-2" key={child.name}>
                <a
                  class="hover:text-azul hover:underline"
                  href={child.href}
                >
                  {child.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ))}

      {/* Assinatura */}
      <div class="text-gray-500 space-y-2">
        {/* Aviso de direitos autorais */}
        <div class="text-xs">
          Copyright © 2023{" "}
          <a
            class="underline hover:text-azul"
            href="https://github.com/TheYuriG"
            target="_blank"
          >
            TheYuriG
          </a>
          <br />
          Todos os direitos reservados.
        </div>
        {/* Ícones de mídia social */}
        <div class="flex">
          <a href="https://www.instagram.com/theyurig/" target="_blank">
            <InstagramSvg stroke={colors["azul-escuro"]} classes="w-8 h-8" />
          </a>
          <a href="https://www.instagram.com/theyurig/" target="_blank">
            <TikTokSvg stroke={colors["azul-escuro"]} classes={`w-8 h-8`} />
          </a>
        </div>
      </div>
    </div>
  );
}
