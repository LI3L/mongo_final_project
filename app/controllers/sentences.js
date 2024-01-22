const {
  getAllSentences,
  getSentence,
  createSentence,
  getSentenceByDifficulty,
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
      const { difficulty, sentence, points } = req.body;
      const newSentence = await createSentence(difficulty, sentence, points);
      res.json(newSentence);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
