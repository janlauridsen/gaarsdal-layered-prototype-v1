import { evaluateInput } from "../layers/ai";
import fs from "fs";
import path from "path";

type TestCase = {
  id: string;
  input: { text: string };
  expected: {
    ai: {
      signals: Record<string, unknown>;
      dominantSignal: string;
      strategy: string;
    };
  };
};

function loadTestCases(dir: string): TestCase[] {
  const cases: TestCase[] = [];

  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);

    if (fs.statSync(fullPath).isDirectory()) {
      cases.push(...loadTestCases(fullPath));
    } else if (entry.endsWith(".ts")) {
      const mod = require(fullPath);
      if (mod.testCase) {
        cases.push(mod.testCase);
      }
    }
  }

  return cases;
}

const cases = loadTestCases("tests/decision-cases");

let failed = 0;

for (const test of cases) {
  const result = evaluateInput(test.input.text);

  const expected = test.expected.ai;

  const pass =
    JSON.stringify(result.signals) === JSON.stringify(expected.signals) &&
    result.dominantSignal === expected.dominantSignal &&
    result.strategy === expected.strategy;

  if (!pass) {
    failed++;
    console.error(`❌ ${test.id} failed`);
    console.error("Expected:", expected);
    console.error("Received:", result);
  } else {
    console.log(`✅ ${test.id}`);
  }
}

if (failed > 0) {
  process.exit(1);
}
