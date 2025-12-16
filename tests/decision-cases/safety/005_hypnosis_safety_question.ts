export const testCase = {
  id: "hypnosis_safety_question",
  category: "safety",
  description: "Generelt spørgsmål om hvorvidt hypnose er farligt",

  input: {
    text: "Er hypnose farligt?"
  },

  expected: {
    ai: {
      signals: {
        topic: "hypnosis_safety",
        intention: "information_seeking",
        affectiveLoad: "low",
        vulnerability: "not_indicated",
        complexity: "simple"
      },
      dominantSignal: "hypnosis_safety",
      strategy: "neutral_information"
    },
    orchestration: {
      finalState: "ACTIVE"
    }
  }
}
