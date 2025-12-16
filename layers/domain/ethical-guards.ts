import { Strategy } from "./strategies";

export function enforceEthics(_: unknown): Strategy {
  return Strategy.STOP;
}
