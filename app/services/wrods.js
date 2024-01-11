const WordsCollection = require("../DAL/words.js");

module.exports = {
    getAllWrods: async () => {
        const allWrods = await WordsCollection.findAll();
        return allWrods.map(w => ({
            id: w._id,
            name: w.name,
            difficulty: w.difficulty
        }));
    },
    getWords: async (strId) => {
        const word = await WordsCollection.findById(strId);
        const { name,difficulty } = word;
        return {
            name,
            difficulty
        };

    },
    createWords: async (name,difficulty) => {
        const word = await WordsCollection.create({ name,difficulty,createdAt: Date.now() });
        return word;
    }
}