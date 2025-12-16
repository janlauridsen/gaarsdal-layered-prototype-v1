import { SessionState } from "./states";

export function transition(_: SessionState): SessionState {
  return SessionState.STOPPED;
}
