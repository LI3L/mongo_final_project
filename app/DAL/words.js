const { ObjectId } = require("mongodb");
const MongoDatabase = require("./db");

class WordsCollection {
  constructor() {
    this.wordsCollection = MongoDatabase.instance().db().collection("words");
  }

  static instance() {
    if (!this._instance) {
      this._instance = new WordsCollection();
    }
    return this._instance;
  }

  static async findAll() {
    try {
      return await this.instance().wordsCollection.find({}).toArray();
    } catch (error) {
      console.error("Error in findAll:", error);
      throw error;
    }
  }

  static async findById(idStr) {
    try {
      return await this.instance().wordsCollection.findOne({
        _id: new ObjectId(idStr),
      });
    } catch (error) {
      console.error("Error in findById:", error);
      throw error;
    }
  }

  static async findByDifficulty(difficulty) {
    try {
      return await this.instance().wordsCollection.findOne({
        difficulty: difficulty,
      });
    } catch (error) {
      console.error("Error in findByDifficulty:", error);
      throw error;
    }
  }

  static async create(word) {
    try {
      console.log("createWords", word.name, word.difficulty);
      return await this.instance().wordsCollection.insertOne(word);
    } catch (error) {
      console.error("Error in create:", error);
      throw error;
    }
  }
}

module.exports = WordsCollection;
