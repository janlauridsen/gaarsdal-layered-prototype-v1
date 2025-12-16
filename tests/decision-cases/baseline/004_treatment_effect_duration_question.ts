export const testCase = {
  id: "treatment_effect_duration_question",
  category: "baseline",
  description: "Spørgsmål om varighed og gentagelse af effekt",

  input: {
    text: "Holder virkningen, eller skal man komme igen senere?"
  },

  expected: {
    ai: {
      signals: {
        topic: "treatment_expectations",
        intention: "information_seeking",
        affectiveLoad: "low",
        vulnerability: "not_indicated",
        complexity: "simple"
      },
      dominantSignal: "treatment_expectations",
      strategy: "neutral_information"
    },
    orchestration: {
      finalState: "ACTIVE"
    }
  }
}
