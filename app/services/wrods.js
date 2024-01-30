const WordsCollection = require("../DAL/words.js");

module.exports = {
  getAllWrods: async () => {
    const allWrods = await WordsCollection.findAll();
    return allWrods.map((w) => ({
      id: w._id,
      name: w.name,
      difficulty: w.difficulty,
      translation: w.translation,
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
  createWords: async (name, difficulty, translation, points) => {
    const word = await WordsCollection.create({
      name,
      difficulty,
      translation,
      points,
      createdAt: Date.now(),
    });
    return word;
  },
  editWord: async (id, name, difficulty, points) => {
    const word = await WordsCollection.editWord(
      id,
      name,
      difficulty,
      translation,
      points
    );
    return word;
  },
  getWordsByDifficulty: async (difficulty) => {
    try {
      const words = await WordsCollection.findByDifficulty(difficulty);
      return words.map((w) => ({
        id: w._id,
        name: w.name,
        difficulty: w.difficulty,
        translation: w.translation,
        points: w.points,
      }));
    } catch (error) {
      console.error("Error in findByDifficulty:", error);
      throw error;
    }
  },
};
