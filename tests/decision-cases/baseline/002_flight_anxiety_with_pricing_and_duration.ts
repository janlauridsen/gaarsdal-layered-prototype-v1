export const testCase = {
  id: "flight_anxiety_with_pricing_and_duration",
  category: "baseline",
  description: "Flyangst kombineret med spørgsmål om pris og antal gange – mulig sårbarhed",

  input: {
    text: "jeg har angst for at flyve og skal snart på ferie – kan du hjælpe med det og hvor mange gange terapi kræver det. Hvad koster det?"
  },

  expected: {
    ai: {
      signals: {
        topic: "phobia_like_anxiety",
        intention: "suitability_check",
        affectiveLoad: "moderate",
        vulnerability: "possible",
        complexity: "composite"
      },
      dominantSignal: "phobia_like_anxiety",
      strategy: "afgrænsning"
    },
    orchestration: {
      finalState: "ACTIVE"
    }
  }
}
