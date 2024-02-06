const {
  getAllSentences,
  getSentence,
  createSentence,
  getSentenceByDifficulty,
  getWords,
  addSuccess,
  addFailure,
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
      const sentenceData = req.body;
      const sentenceArray = Array.isArray(sentenceData)? sentenceData: [sentenceData];
      const newSentence = [];
      for (const sent of sentenceArray) {
        const { difficulty, sentence, words, points } = sent;
        const sen=await createSentence(difficulty, sentence, words, points);
        newSentence.push(sen);
      }
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
  addSuccess: async (req, res) => {
    try {
      const id = req.params.id;
      const sentence = await addSuccess(id);
      res.json(sentence);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  addFailure: async (req, res) => {
    try {
      const id = req.params.id;
      const sentence = await addFailure(id);
      res.json(sentence);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
