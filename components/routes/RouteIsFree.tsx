// SVGs
import { PaidSvg } from "../../assets/PaidSvg.tsx";
import { UnpaidSvg } from "../../assets/UnpaidSvg.tsx";
// Classes CSS repetíveis entre componentes
import {
  routeSpanClasses,
  routeSvgClasses,
} from "../../data/routeComponentClasses.ts";

// Retorna um componente sobre custo de uma dada rota
export function RouteIsFree({ free }: { free: boolean }) {
  // Se a rota for marcada como gratuita, retorna um componente de gratuidade
  if (free === true) {
    return (
      <span title="Entrada gratuita" class={routeSpanClasses}>
        <UnpaidSvg stroke="green" classes={routeSvgClasses} /> Entrada Gratuita
      </span>
    );
  }

  // Caso a rota não seja marcada como gratuita, retorna um componente de pagamento necessário
  return (
    <span title="Entrada paga" class={routeSpanClasses}>
      <PaidSvg stroke="red" classes={routeSvgClasses} /> Entrada Paga
    </span>
  );
}
