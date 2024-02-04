const {
  getAllSentences,
  getSentence,
  createSentence,
  getSentenceByDifficulty,
  getWords,
} = require("../services/sentences");

module.exports = {
  listSentences: async (req, res) => {
    try {
      const sentences = await getAllSentences();
      res.json(sentences);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getSentence: async (req, res) => {
    try {
      const id = req.params.id;
      const sentence = await getSentence(id);
      res.json(sentence);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getSentenceByDifficulty: async (req, res) => {
    try {
      const difficulty = req.params.difficulty;
      const sentence = await getSentenceByDifficulty(difficulty);
      res.json(sentence);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  createSentence: async (req, res) => {
    try {
      const { difficulty, sentence, words, points } = req.body;
      const newSentence = await createSentence(
        difficulty,
        sentence,
        words,
        points
      );
      res.json(newSentence);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getWords: async (req, res) => {
    try {
      const id = req.params.id;
      const words = await getWords(id);
      res.json(words);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
