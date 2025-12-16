export const testCase = {
  id: "hypnosis_consciousness_question",
  category: "baseline",
  description: "Bruger spørger om man mister bevidstheden under hypnose",

  input: {
    text: "Mister jeg bevidstheden under hypnose?"
  },

  expected: {
    ai: {
      signals: {
        topic: "hypnosis_general_information",
        intention: "information_seeking",
        affectiveLoad: "low",
        vulnerability: "not_indicated",
        complexity: "simple"
      },
      dominantSignal: "hypnosis_general_information",
      strategy: "neutral_information"
    },
    orchestration: {
      finalState: "ACTIVE"
    }
  }
}
