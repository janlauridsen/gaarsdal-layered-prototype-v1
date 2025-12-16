import { evaluateInput } from "../layers/ai";
import fs from "fs";
import path from "path";

function loadCases(dir: string): any[] {
  const cases: any[] = [];

  for (const entry of fs.readdirSync(dir)) {
    const full = path.join(dir, entry);

    if (fs.statSync(full).isDirectory()) {
      cases.push(...loadCases(full));
    } else if (entry.endsWith(".ts")) {
      const mod = require(full);
      if (mod.testCase) cases.push(mod.testCase);
    }
  }

  return cases;
}

const cases = loadCases("tests/decision-cases");

let failed = 0;

for (const test of cases) {
  const result = evaluateInput({ text: test.input.text });

  const expected = test.expected.ai;

  const ok =
    JSON.stringify(result.signals) === JSON.stringify(expected.signals) &&
    result.dominantSignal === expected.dominantSignal &&
    result.strategy === expected.strategy;

  if (!ok) {
    failed++;
    console.error(`❌ ${test.id}`);
    console.error("Expected:", expected);
    console.error("Got:", result);
  } else {
    console.log(`✅ ${test.id}`);
  }
}

if (failed > 0) process.exit(1);
