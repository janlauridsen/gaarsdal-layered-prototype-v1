import { Strategy } from "@/layers/domain/strategies";
import { AISignals } from "./signals";

export function decide(_: AISignals): Strategy {
  return Strategy.STOP;
}
