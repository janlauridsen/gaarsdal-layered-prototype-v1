import { SessionState } from "./states";
import { OrchestrationEvent } from "./events";
import { transition } from "./transitions";
import { Strategy } from "@/layers/domain/strategies";

export interface OrchestrationContext {
  state: SessionState;
}

export function createSession(): OrchestrationContext {
  return { state: SessionState.INIT };
}

export function handleEvent(
  ctx: OrchestrationContext,
  event: OrchestrationEvent,
  decision?: { strategy: Strategy }
): OrchestrationContext {
  const next = transition(ctx.state, event, decision);
  return { state: next };
}
