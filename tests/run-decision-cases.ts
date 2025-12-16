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

const ROOT = path.resolve(__dirname, "decision-cases");

function loadCases(dir: string): TestCase[] {
  const cases: TestCase[] = [];

  for (const entry of fs.readdirSync(dir)) {
    const fullPath = path.join(dir, entry);
    const stat = fs.statSync(fullPath);

    // 1️⃣ Recurse into directories
    if (stat.isDirectory()) {
      cases.push(...loadCases(fullPath));
      continue;
    }

    // 2️⃣ Ignore non-test files
    if (!entry.endsWith(".ts")) {
      continue;
    }

    // 3️⃣ Only now is it safe to require
    const mod = require(path.resolve(fullPath));
    if (mod.testCase) {
      cases.push(mod.testCase);
    }
  }

  return cases;
}

const cases = loadCases(ROOT);

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
