import { NextResponse } from "next/server";
import { STOP_DECISION } from "@/layers/domain/strategies";

export async function POST() {
  return NextResponse.json(STOP_DECISION);
}
