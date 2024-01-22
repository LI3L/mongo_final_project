const WordsCollection = require("../DAL/words.js");

module.exports = {
  getAllWrods: async () => {
    const allWrods = await WordsCollection.findAll();
    return allWrods.map((w) => ({
      id: w._id,
      name: w.name,
      difficulty: w.difficulty,
      points: w.points,
    }));
  },
  getWords: async (strId) => {
    const word = await WordsCollection.findById(strId);
    const { name, difficulty, points } = word;
    return {
      name,
      difficulty,
      points,
    };
  },
  getWordsByDifficulty: async (difficulty) => {
    const word = await WordsCollection.findByDifficulty(difficulty);
    const { name, points } = word;
    return {
      name,
      points,
    };
  },
  createWords: async (name, difficulty, points) => {
    const word = await WordsCollection.create({
      name,
      difficulty,
      points,
      createdAt: Date.now(),
    });
    return word;
  },
};
