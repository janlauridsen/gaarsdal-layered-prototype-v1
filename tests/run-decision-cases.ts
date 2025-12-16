import { evaluateInput } from "../layers/ai";
import * as fs from "fs";
import * as path from "path";

type TestCase = {
  id: string;
  input: { text: string };
  expected: {
    ai: {
      signals: unknown;
      dominantSignal: string;
      strategy: string;
    };
  };
};

function loadCases(dir: string): TestCase[] {
  const cases: TestCase[] = [];

  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);

    if (fs.statSync(fullPath).isDirectory()) {
      cases.push(...loadCases(fullPath));
    } else if (entry.endsWith(".ts")) {
      const mod = require(fullPath);
      if (mod.testCase) cases.push(mod.testCase);
    }
  }

  return cases;
}

const cases = loadCases("tests/decision-cases");

let failed = 0;

for (const test of cases) {
  const result = evaluateInput(test.input.text);
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

if (failed > 0) {
  process.exit(1);
}
