// Configurações básicas Twind V1
import { defineConfig, Preset } from "https://esm.sh/@twind/core@1.1.3";
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4";
import presetAutoprefix from "https://esm.sh/@twind/preset-autoprefix@1.0.7";
// Importa paleta de cores definida do site
import { colors } from "./data/colors.ts";

export default {
  ...defineConfig({
    presets: [presetTailwind() as Preset, presetAutoprefix()],
    preflight: {
      "@import":
        "url('https://fonts.googleapis.com/css2?family=Agbalumo&family=Rubik&display=swap');",
    },
    theme: {
      colors,
    },
    rules: [
      ["custom-scrollbar", {
        "&::-webkit-scrollbar-thumb": {
          "background-color": colors["azul-claro"],
          outline: "0.15rem solid " + colors["azul-escuro"],
          "outline-offset": "-0.15rem",
          "border-radius": "0.4rem",
        },
        "&::-webkit-scrollbar": {
          width: "1em",
        },
        "&::-webkit-scrollbar-track": {
          "background-color": colors["rosa-claro"],
        },
      }],
      ["font-agba", {
        "font-family": "Agbalumo",
      }],
      ["text-shadow-rosa-escuro", {
        "filter": `drop-shadow(0 2px 1px ${
          colors["rosa-escuro"]
        }) drop-shadow(0 2px 1px ${colors["rosa-escuro"]})`,
      }],
      ["text-shadow-azul-escuro", {
        "filter": `drop-shadow(0 2px 1px ${
          colors["azul-escuro"]
        }) drop-shadow(0 2px 1px ${colors["azul-escuro"]})`,
      }],
      ["primary-button", {
        "&": {
          "font-weight": "bold",
          "text-transform": "uppercase",
          "color": colors.branco,
          "background-color": colors["rosa-escuro"],
          "margin": "0.5rem",
          "padding-top": "0.5rem",
          "padding-bottom": "0.5rem",
          "padding-left": "1rem",
          "padding-right": "1rem",
          "border-radius": "0.8rem",
          "transition": "box-shadow 400ms, transform 400ms",
        },
        "&:hover": {
          "box-shadow": `0.3em 0.3em ${colors["azul-claro"]}`,
          "transform": "translate(-0.3em, -0.3em)",
        },
      }],
      ["transition-shadow-rosa-azul", {
        "&": {
          "box-shadow": "0.5em 0.5em 0.5em " + colors["rosa"],
          "transition": "box-shadow 400ms",
        },
        "&:hover": {
          "box-shadow": "0.3em 0.3em 0.2em " + colors["azul"],
        },
      }],
      ["transition-shadow-azul-rosa", {
        "&": {
          "box-shadow": "0.5em 0.5em 0.5em " + colors["azul"],
          "transition": "box-shadow 400ms",
        },
        "&:hover": {
          "box-shadow": "0.3em 0.3em 0.2em " + colors["rosa"],
        },
      }],
    ],
  }),
  selfURL: import.meta.url,
};
