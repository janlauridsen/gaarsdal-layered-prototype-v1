import { DomainSignal } from "./domain-types";
import { RiskLevel } from "./risk-levels";

export const SIGNAL_RISK_MAP: Record<DomainSignal, RiskLevel> = {
  [DomainSignal.NONE]: RiskLevel.NONE,

  [DomainSignal.STRESS]: RiskLevel.LOW,
  [DomainSignal.REGULATION_REQUEST]: RiskLevel.LOW,

  [DomainSignal.TRAUMA_REFERENCE]: RiskLevel.HIGH,
  [DomainSignal.PTSD_REFERENCE]: RiskLevel.HIGH,

  [DomainSignal.AMBIGUOUS_VULNERABILITY]: RiskLevel.HIGH,

  [DomainSignal.SELF_HARM_SIGNAL]: RiskLevel.CRITICAL,
  [DomainSignal.SUICIDAL_IDEATION]: RiskLevel.CRITICAL,
};
