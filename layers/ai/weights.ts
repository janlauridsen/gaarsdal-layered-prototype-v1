import { Strategy } from "../domain/strategies";

export const SIGNAL_WEIGHTS: Record<DomainSignal, number> = {
  [DomainSignal.NONE]: 0,

  [DomainSignal.STRESS]: 1,
  [DomainSignal.REGULATION_REQUEST]: 1,

  [DomainSignal.AMBIGUOUS_VULNERABILITY]: 3,

  [DomainSignal.TRAUMA_REFERENCE]: 5,
  [DomainSignal.PTSD_REFERENCE]: 5,

  [DomainSignal.SELF_HARM_SIGNAL]: 10,
  [DomainSignal.SUICIDAL_IDEATION]: 10,
};
