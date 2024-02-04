const SentencesCollection = require("../DAL/sentences.js");

module.exports = {
  getAllSentences: async () => {
    const allSentences = await SentencesCollection.findAll();
    return allSentences.map((s) => ({
      id: s._id,
      difficulty: s.difficulty,
      sentence: s.sentence,
      words: s.words,
      points: s.points,
    }));
  },
  getSentence: async (strId) => {
    const Sentence = await SentencesCollection.findById(strId);
    const { difficulty, sentence, words, points } = Sentence;
    return {
      difficulty,
      sentence,
      word,
      points,
    };
  },
  getSentenceByDifficulty: async (difficulty) => {
    const Sentence = await SentencesCollection.findByDifficulty(difficulty);
    return sentence.map((s) => ({
      id: s._id,
      difficulty: s.difficulty,
      sentence: s.sentence,
      words: s.words,
      points: s.points,
    }));
  },
  createSentence: async (difficulty, sentence, words, points) => {
    const s = await SentencesCollection.create({
      difficulty,
      sentence,
      words,
      points,
      createdAt: Date.now(),
    });
    return s;
  },
  getWords: async (strId) => {
    const words = await SentencesCollection.getWords(strId);
    return words;
  },
};
