import { DomainSignal } from "../domain/domain-types";

export interface RawInput {
  text?: string;
}

export function extractSignals(input: RawInput): DomainSignal[] {
  if (!input.text) return [DomainSignal.NONE];

  const t = input.text.toLowerCase();

  const signals: DomainSignal[] = [];

  if (t.includes("stress") || t.includes("presset")) {
    signals.push(DomainSignal.STRESS);
  }

  if (t.includes("hjælp") || t.includes("regulere")) {
    signals.push(DomainSignal.REGULATION_REQUEST);
  }

  if (t.includes("traume")) {
    signals.push(DomainSignal.TRAUMA_REFERENCE);
  }

  if (t.includes("ptsd")) {
    signals.push(DomainSignal.PTSD_REFERENCE);
  }

  if (
    t.includes("jeg vil ikke leve") ||
    t.includes("skade mig selv")
  ) {
    signals.push(DomainSignal.SELF_HARM_SIGNAL);
  }

  if (signals.length === 0) {
    signals.push(DomainSignal.NONE);
  }

  return signals;
}
