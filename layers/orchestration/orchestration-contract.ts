import { OrchestrationEvent } from "./events";
import { SessionState } from "./states";

export interface OrchestrationInput {
  event: OrchestrationEvent;
}

export interface OrchestrationOutput {
  state: SessionState;
}
