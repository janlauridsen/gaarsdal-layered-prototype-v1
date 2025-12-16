import { SessionState } from "./states";
import { OrchestrationEvent } from "./events";
import { Strategy } from "@/layers/domain/strategies";

export function transition(
  state: SessionState,
  event: OrchestrationEvent,
  decision?: { strategy: Strategy }
): SessionState {
  if (state === SessionState.STOPPED) {
    return SessionState.STOPPED;
  }

  if (event === OrchestrationEvent.FORCE_STOP) {
    return SessionState.STOPPED;
  }

  if (event === OrchestrationEvent.DECISION_RECEIVED) {
    if (!decision) return SessionState.STOPPED;
    if (decision.strategy === Strategy.STOP) {
      return SessionState.STOPPED;
    }
    return SessionState.ACTIVE;
  }

  if (event === OrchestrationEvent.START) {
    return SessionState.ACTIVE;
  }

  return SessionState.STOPPED;
}
