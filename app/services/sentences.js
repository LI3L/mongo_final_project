const SentencesCollection = require("../DAL/sentences.js");

module.exports = {
  getAllSentences: async () => {
    const allSentences = await SentencesCollection.findAll();
    return allSentences.map((s) => ({
      id: s._id,
      difficulty: s.difficulty,
      sentence: s.sentence
    }));
  },
  getSentence: async (strId) => {
    const Sentence = await SentencesCollection.findById(strId);
    const { difficulty , sentence} = Sentence;
    return {
      difficulty,
      sentence
    };
  },
  createSentence: async (difficulty, sentence) => {
    const s = await SentencesCollection.create({
      difficulty,
      sentence,
      createdAt: Date.now(),
    });
    return s;
  },
};
