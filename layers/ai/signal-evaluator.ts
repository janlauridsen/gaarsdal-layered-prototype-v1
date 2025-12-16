import { DomainSignal } from "../domain/domain-types";

const PRIORITY: DomainSignal[] = [
  DomainSignal.SELF_HARM_SIGNAL,
  DomainSignal.PTSD_REFERENCE,
  DomainSignal.TRAUMA_REFERENCE,
  DomainSignal.ADDICTION_REFERENCE,
  DomainSignal.MEMORY_MANIPULATION_REQUEST,
  DomainSignal.IDENTITY_MANIPULATION_REQUEST,
  DomainSignal.TREATMENT_SUBSTITUTION_REQUEST,
  DomainSignal.TREATMENT_GUARANTEE_REQUEST,
  DomainSignal.LOSS_OF_CONTROL_CONCERN,
  DomainSignal.SAFETY_CONCERN,
  DomainSignal.PHOBIA_REFERENCE,
  DomainSignal.ANXIETY_REFERENCE,
  DomainSignal.STRESS_REFERENCE,
  DomainSignal.PRACTICAL_QUERY,
  DomainSignal.NONE
];

export interface EvaluatedSignals {
  signals: DomainSignal[];
  dominantSignal: DomainSignal;
}

export function evaluateSignals(
  signals: DomainSignal[]
): EvaluatedSignals {
  for (const p of PRIORITY) {
    if (signals.includes(p)) {
      return {
        signals,
        dominantSignal: p
      };
    }
  }

  // Fallback (bør aldrig ske)
  return {
    signals,
    dominantSignal: DomainSignal.NONE
  };
}
