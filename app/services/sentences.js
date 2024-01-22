const SentencesCollection = require("../DAL/sentences.js");

module.exports = {
  getAllSentences: async () => {
    const allSentences = await SentencesCollection.findAll();
    return allSentences.map((s) => ({
      id: s._id,
      difficulty: s.difficulty,
      sentence: s.sentence,
      points: s.points,
    }));
  },
  getSentence: async (strId) => {
    const Sentence = await SentencesCollection.findById(strId);
    const { difficulty, sentence, points } = Sentence;
    return {
      difficulty,
      sentence,
      points,
    };
  },
  getSentenceByDifficulty: async (difficulty) => {
    const Sentence = await SentencesCollection.findByDifficulty(difficulty);
    const { sentence, points } = Sentence;
    return {
      sentence,
      points,
    };
  },
  createSentence: async (difficulty, sentence, points) => {
    const s = await SentencesCollection.create({
      difficulty,
      sentence,
      points,
      createdAt: Date.now(),
    });
    return s;
  },
};
