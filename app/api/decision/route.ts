import { NextResponse } from "next/server";

import { decideAI } from "../../../layers/ai";
import { extractSignals } from "../../../layers/ai";
import { decideDomain } from "../../../layers/domain/domain-contract";
import { createSession, handleEvent } from "../../../layers/orchestration/state-machine";
import { OrchestrationEvent } from "../../../layers/orchestration/events";

export async function POST(req: Request) {
  const body = await req.json().catch(() => ({}));

  // --- Input → signals
  const signals = extractSignals({ text: body?.text });

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
    signals,
    dominantSignal: aiResult.dominantSignal,
    state: session.state,
    decision: domainDecision,
  });
}
