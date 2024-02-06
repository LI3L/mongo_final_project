const { json } = require("body-parser");
const {
  getAllWrods,
  getWrods,
  getWordsByDifficulty,
  createWords,
  editWord,
  addFailure,
  addSuccess,
} = require("../services/wrods");

module.exports = {
  listWrods: async (req, res) => {
    try {
      const wrods = await getAllWrods();
      res.json(wrods);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getWrods: async (req, res) => {
    try {
      const id = req.params.id;
      const wrods = await getWrods(id);
      res.json(wrods);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getWrodsByDifficulty: async (req, res) => {
    try {
      const difficulty = req.params.difficulty;
      const wrods = await getWordsByDifficulty(difficulty);
      res.json(wrods);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  createWrods: async (req, res) => {
    try {
      const wordsData = req.body;
      const wordsArray = Array.isArray(wordsData) ? wordsData : [wordsData];
      const newWords = [];
      for (const word of wordsArray) {
        const { name, difficulty, translation, points } = word;
        const w = await createWords(name, difficulty, translation, points);
        newWords.push(w);
      }
      res.json(newWords);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  editWord: async (req, res) => {
    try {
      const id = req.params.id;
      const { name, difficulty, translation, points } = req.body;
      const word = await editWord(id, name, difficulty, translation, points);
      res.json(word);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  addSuccess: async (req, res) => {
    try {
      const id = req.params.id;
      const word = await addSuccess(id);
      res.json(word);
    } catch (err) {
      res.status;
    }
  },
  addFailure: async (req, res) => {
    try {
      const id = req.params.id;
      const word = await addFailure(id);
      res.json(word);
    } catch (err) {
      res.status;
    }
  },
};
