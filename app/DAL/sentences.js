const { ObjectId } = require("mongodb");
const MongoDatabase = require("./db");

class SentencesCollection {
  constructor() {
    this.sentencesCollection = MongoDatabase.instance()
      .db()
      .collection("sentences");
  }

  static instance() {
    if (!this._instance) {
      this._instance = new SentencesCollection();
    }
    return this._instance;
  }

  static async findAll() {
    try {
      return await this.instance().sentencesCollection.find({}).toArray();
    } catch (error) {
      console.error("Error in findAll:", error);
      throw error;
    }
  }

  static async findById(idStr) {
    try {
      return await this.instance().sentencesCollection.findOne({
        _id: new ObjectId(idStr),
      });
    } catch (error) {
      console.error("Error in findById:", error);
      throw error;
    }
  }

  static async findByDifficulty(difficulty) {
    try {
      return await this.instance()
        .sentencesCollection.find({
          difficulty: difficulty,
        })
        .toArray();
    } catch (error) {
      console.error("Error in findByDifficulty:", error);
      throw error;
    }
  }

  static async create(Sentence) {
    try {
      return await this.instance().sentencesCollection.insertOne(Sentence);
    } catch (error) {
      console.error("Error in create:", error);
      throw error;
    }
  }

  static async getWords(idStr) {
    try {
      const sentence = await this.instance().sentencesCollection.findOne({
        _id: new ObjectId(idStr),
      });
      return sentence.words;
    } catch (error) {
      console.error("Error in getWords:", error);
      throw error;
    }
  }

  //increment success by 1
  static async addSuccess(idStr) {
    try {
      return await this.instance().sentencesCollection.updateOne(
        { _id: new ObjectId(idStr) },
        {
          $inc: {
            success: 1,
          },
        }
      );
    } catch (error) {
      console.error("Error in addSuccess:", error);
      throw error;
    }
  }

  //increment failure by 1
  static async addFailure(idStr) {
    try {
      return await this.instance().sentencesCollection.updateOne(
        { _id: new ObjectId(idStr) },
        {
          $inc: {
            failure: 1,
          },
        }
      );
    } catch (error) {
      console.error("Error in addFailure:", error);
      throw error;
    }
  }
}

module.exports = SentencesCollection;
