import { DomainSignal } from "../domain/domain-types";

export interface RawInput {
  text?: string;
}

export function extractSignals(input: RawInput): DomainSignal[] {
  if (!input.text) return [DomainSignal.NONE];

  const t = input.text.toLowerCase();
  const signals: DomainSignal[] = [];

  // Belastning / regulering
  if (t.includes("stress") || t.includes("presset")) {
    signals.push(DomainSignal.STRESS_REFERENCE);
  }

  if (t.includes("angst") || t.includes("bange")) {
    signals.push(DomainSignal.ANXIETY_REFERENCE);
  }

  if (t.includes("regulere")) {
    signals.push(DomainSignal.REGULATION_REQUEST);
  }

  // Frygt / fobi
  if (t.includes("fly") || t.includes("flyve")) {
    signals.push(DomainSignal.PHOBIA_REFERENCE);
  }

  // Traume og højrisiko
  if (
    t.includes("traume") ||
    t.includes("mareridt") ||
    t.includes("barndom")
  ) {
    signals.push(DomainSignal.TRAUMA_REFERENCE);
  }

  if (t.includes("ptsd")) {
    signals.push(DomainSignal.PTSD_REFERENCE);
  }

  if (t.includes("afhængighed") || t.includes("misbrug")) {
    signals.push(DomainSignal.ADDICTION_REFERENCE);
  }

  if (
    t.includes("jeg vil ikke leve") ||
    t.includes("skade mig selv")
  ) {
    signals.push(DomainSignal.SELF_HARM_SIGNAL);
  }

  // Hukommelse / identitet
  if (t.includes("glemme minder") || t.includes("huske detaljer")) {
    signals.push(DomainSignal.MEMORY_MANIPULATION_REQUEST);
  }

  if (t.includes("ændre min personlighed")) {
    signals.push(DomainSignal.IDENTITY_MANIPULATION_REQUEST);
  }

  // Behandling / garanti / substitution
  if (
    t.includes("erstatte medicin") ||
    t.includes("erstatte behandling")
  ) {
    signals.push(DomainSignal.TREATMENT_SUBSTITUTION_REQUEST);
  }

  if (t.includes("garantere") || t.includes("garanti")) {
    signals.push(DomainSignal.TREATMENT_GUARANTEE_REQUEST);
  }

  // Sikkerhed / kontrol
  if (t.includes("farligt")) {
    signals.push(DomainSignal.SAFETY_CONCERN);
  }

  if (t.includes("kontrollere mig") || t.includes("uden min vilje")) {
    signals.push(DomainSignal.LOSS_OF_CONTROL_CONCERN);
  }

  // Praktisk
  if (
    t.includes("kontakt") ||
    t.includes("mail") ||
    t.includes("telefon") ||
    t.includes("book")
  ) {
    signals.push(DomainSignal.PRACTICAL_QUERY);
  }

  if (signals.length === 0) {
    signals.push(DomainSignal.NONE);
  }

  return signals;
}
