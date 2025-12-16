import { DomainSignal } from "../domain/domain-types";
import { SIGNAL_WEIGHTS } from "./weights";

export function selectDominantSignal(
  signals: DomainSignal[]
): DomainSignal {
  if (signals.length === 0) return DomainSignal.NONE;

  let dominant = DomainSignal.NONE;
  let highest = -1;

  for (const s of signals) {
    const weight = SIGNAL_WEIGHTS[s] ?? 0;
    if (weight > highest) {
      highest = weight;
      dominant = s;
    }
  }

  return dominant;
}
