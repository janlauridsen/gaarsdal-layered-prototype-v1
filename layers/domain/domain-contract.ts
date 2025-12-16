import { DomainSignal } from "./domain-types";
import { Strategy } from "./strategies";
import { enforceEthics } from "./ethical-guards";

export interface DomainInput {
  signals: DomainSignal[];
}

export interface DomainDecision {
  strategy: Strategy;
}

export function decideDomain(input: DomainInput): DomainDecision {
  const strategy = enforceEthics({
    dominantSignal: input.signals[0] ?? DomainSignal.NONE,
    allSignals: input.signals,
  });

  return { strategy };
}
