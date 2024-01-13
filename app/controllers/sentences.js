const { getAllSentences, getSentence, createSentence } = require("../services/sentences");

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
      const sentenceId = req.params.userId;
      const sentence = await getSentence(sentenceId);
      res.json(sentence);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  createSentence: async (req, res) => {
    try {
      const { difficulty,sentence } = req.body;
      const newSentence = await createSentence(difficulty,sentence);
      res.json(newSentence);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
