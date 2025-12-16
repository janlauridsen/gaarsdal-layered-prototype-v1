import { NextResponse } from "next/server";

import { decideAI } from "../../../layers/ai";
import { decideDomain } from "../../../layers/domain/domain-contract";
import { createSession, handleEvent } from "../../../layers/orchestration/state-machine";
import { OrchestrationEvent } from "../../../layers/orchestration/events";
import { DomainSignal } from "../../../layers/domain/domain-types";


export async function POST() {
  // --- input (placeholder, statisk)
  const signals: DomainSignal[] = [DomainSignal.NONE];

  // --- AI
  const aiResult = decideAI({ signals });

  // --- Domain
  const domainDecision = decideDomain({
    signals: [aiResult.dominantSignal],
  });

  // --- Orchestration
  let session = createSession();
  session = handleEvent(session, OrchestrationEvent.START);
  session = handleEvent(
    session,
    OrchestrationEvent.DECISION_RECEIVED,
    domainDecision
  );

  return NextResponse.json({
    state: session.state,
    decision: domainDecision,
  });
}
