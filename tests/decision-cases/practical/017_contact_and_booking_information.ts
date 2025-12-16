export const testCase = {
  id: "contact_and_booking_information",
  category: "practical",
  description: "Spørgsmål om kontaktmuligheder og booking af tid",

  input: {
    text: "hvordan får jeg kontakt med hypnotisøren pr mail eller tlf samt hvordan booker jeg en tid?"
  },

  expected: {
    ai: {
      signals: {
        topic: "contact_and_booking",
        intention: "practical_information",
        affectiveLoad: "low",
        vulnerability: "not_indicated",
        complexity: "simple"
      },
      dominantSignal: "contact_and_booking",
      strategy: "neutral_information"
    },
    orchestration: {
      finalState: "ACTIVE"
    }
  }
}
