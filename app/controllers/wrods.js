const {
  getAllWrods,
  getWrods,
  getWordsByDifficulty,
  createWrods,
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
      const wrods = await getWrodsByDifficulty(difficulty);
      res.json(wrods);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  createWrods: async (req, res) => {
    try {
      const { name, difficulty, points } = req.body;
      const newWrods = await createWrods(name, difficulty, points);
      res.json(newWrods);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
