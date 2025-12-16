import { DomainSignal } from "../domain/domain-types";

export type AIStrategy =
  | "stop"
  | "afgrænsning"
  | "neutral_information";

export interface AIDecision {
  strategy: AIStrategy;
}

export function decideStrategy(
  evaluated: { dominantSignal: DomainSignal }
): AIDecision {
  switch (evaluated.dominantSignal) {
    // 🔴 Absolut stop
    case DomainSignal.SELF_HARM_SIGNAL:
    case DomainSignal.PTSD_REFERENCE:
    case DomainSignal.TRAUMA_REFERENCE:
    case DomainSignal.ADDICTION_REFERENCE:
    case DomainSignal.MEMORY_MANIPULATION_REQUEST:
    case DomainSignal.IDENTITY_MANIPULATION_REQUEST:
    case DomainSignal.TREATMENT_SUBSTITUTION_REQUEST:
      return { strategy: "stop" };

    // 🟡 Afgrænsning
    case DomainSignal.TREATMENT_GUARANTEE_REQUEST:
      return { strategy: "afgrænsning" };

    // 🟢 Neutral information
    case DomainSignal.LOSS_OF_CONTROL_CONCERN:
    case DomainSignal.SAFETY_CONCERN:
    case DomainSignal.PHOBIA_REFERENCE:
    case DomainSignal.ANXIETY_REFERENCE:
    case DomainSignal.STRESS_REFERENCE:
    case DomainSignal.PRACTICAL_QUERY:
    case DomainSignal.NONE:
    default:
      return { strategy: "neutral_information" };
  }
}
