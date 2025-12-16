import { Strategy } from "../domain/strategies";
import { DomainSignal } from "../domain/domain-types";

import { selectDominantSignal } from "./signal-evaluator";

export interface AIInput {
  signals: DomainSignal[];
}

export interface AIOutput {
  dominantSignal: DomainSignal;
  proposedStrategy: Strategy;
}

export function decideAI(input: AIInput): AIOutput {
  const dominant = selectDominantSignal(input.signals);

  return {
    dominantSignal: dominant,
    proposedStrategy: Strategy.STOP,
  };
}
