export const testCase = {
  id: "weight_loss_basic_suitability",
  category: "baseline",
  description: "Bruger spørger om hypnose kan hjælpe med vægttab – ingen sårbarhed",

  input: {
    text: "jeg har problemer med min vægt og vil gerne tabe mig – kan du hjælpe med det?"
  },

  expected: {
    ai: {
      signals: {
        topic: "weight_related_behavior",
        intention: "suitability_check",
        affectiveLoad: "low",
        vulnerability: "not_indicated",
        complexity: "simple"
      },
      dominantSignal: "weight_related_behavior",
      strategy: "neutral_information"
    },
    orchestration: {
      finalState: "ACTIVE"
    }
  }
}
