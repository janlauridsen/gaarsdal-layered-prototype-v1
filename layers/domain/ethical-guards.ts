import { DomainSignal } from "./domain-types";
import { RiskLevel } from "./risk-levels";
import { SIGNAL_RISK_MAP } from "./signal-policy";
import { Strategy } from "./strategies";

export interface DomainEvaluation {
  dominantSignal: DomainSignal;
  allSignals: DomainSignal[];
}

export function evaluateRisk(signals: DomainSignal[]): RiskLevel {
  let highest: RiskLevel = RiskLevel.NONE;

  for (const s of signals) {
    const level = SIGNAL_RISK_MAP[s] ?? RiskLevel.NONE;
    if (
      level === RiskLevel.CRITICAL ||
      (level === RiskLevel.HIGH && highest !== RiskLevel.CRITICAL) ||
      (level === RiskLevel.LOW && highest === RiskLevel.NONE)
    ) {
      highest = level;
    }
  }

  return highest;
}

export function enforceEthics(
  evaluation: DomainEvaluation
): Strategy {
  const risk = evaluateRisk(evaluation.allSignals);

  if (risk === RiskLevel.CRITICAL) return Strategy.STOP;
  if (risk === RiskLevel.HIGH) return Strategy.STOP;

  return Strategy.STOP;
}
