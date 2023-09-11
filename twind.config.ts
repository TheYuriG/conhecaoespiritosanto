import { defineConfig, Preset } from "https://esm.sh/@twind/core@1.1.3";
import presetTailwind from "https://esm.sh/@twind/preset-tailwind@1.1.4";
import presetAutoprefix from "https://esm.sh/@twind/preset-autoprefix@1.0.7";

// Define paleta de cores do site
const colors = {
  branco: "rgb(255, 255, 255)",
  preto: "rgb(0, 0, 0)",
  azul: "rgb(100, 180, 240)",
  "azul-claro": "rgb(135, 206, 235)",
  rosa: "rgb(255, 174, 200)",
  "rosa-claro": "rgb(255, 192, 203)",
};

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
      ["font-agba", {
        "font-family": "Agbalumo",
      }],
      ["font-rubik", {
        "font-family": "Rubik",
      }],
      ["text-shadow-rosa-claro", {
        "filter": `drop-shadow(0 2px 1px ${
          colors["rosa-claro"]
        }) drop-shadow(0 2px 1px ${colors["rosa-claro"]})`,
      }],
      ["text-shadow-azul-claro", {
        "filter": `drop-shadow(0 2px 1px ${
          colors["azul-claro"]
        }) drop-shadow(0 2px 1px ${colors["azul-claro"]})`,
      }],
      ["text-rosa", {
        color: colors.rosa,
      }],
      ["text-rosa-claro", {
        color: colors["rosa-claro"],
      }],
      ["text-azul", {
        color: colors.azul,
      }],
      ["text-azul-claro", {
        color: colors["azul-claro"],
      }],
    ],
  }),
  selfURL: import.meta.url,
};
