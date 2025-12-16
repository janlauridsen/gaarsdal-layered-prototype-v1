import { extractInput } from "./input-extractor";
import { evaluateSignals } from "./signal-evaluator";
import { decideStrategy } from "./ai-contract";

export function evaluateInput(input: string, context?: unknown) {
  // 1. Udtræk rå signaler
  const extracted = extractInput(input);

  // 2. Evaluer og vægt signaler
  const evaluated = evaluateSignals(extracted);

  // 3. Vælg strategi (ingen tekst, ingen etik her)
  const decision = decideStrategy(evaluated, context);

  return {
    signals: evaluated.signals,
    dominantSignal: evaluated.dominantSignal,
    strategy: decision.strategy
  };
}
