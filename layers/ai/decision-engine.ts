import { extractSignals } from "./input-extractor";
import { evaluateSignals } from "./signal-evaluator";
import { decideStrategy } from "./ai-contract";

export function evaluateInput(input: string) {
  // 1. Extract raw domain signals
  const signals = extractSignals({ text: input });

  // 2. Evaluate and prioritize signals
  const evaluated = evaluateSignals(signals);

  // 3. Decide strategy (deterministic)
  const decision = decideStrategy(evaluated);

  return {
    signals: evaluated.signals,
    dominantSignal: evaluated.dominantSignal,
    strategy: decision.strategy
  };
}
