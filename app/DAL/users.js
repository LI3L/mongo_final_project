const { ObjectId } = require("mongodb");
const MongoDatabase = require("./db");

class UsersCollection {
  constructor() {
    this.usersCollection = MongoDatabase.instance().db().collection("users");
  }

  static instance() {
    if (!this._instance) {
      this._instance = new UsersCollection();
    }
    return this._instance;
  }
  static async getLeaderBord() {
    try {
      return await this.instance()
        .usersCollection.find({})
        .sort({points:-1})
        .limit(10)
        .toArray();
    } catch (error) {
      console.error("Error in getLeaderBord:", error);
      throw error;
    }
  }

  static async findAll() {
    try {
      return await this.instance().usersCollection.find({}).toArray();
    } catch (error) {
      console.error("Error in findAll:", error);
      throw error;
    }
  }
  static async findByMail(mail) {
    try {
      console.log(mail);
      const u = await this.instance().usersCollection.findOne({ mail: mail });
      if (u) return u;
      return null;
    } catch (error) {
      console.error("Error in findByMail:", error);
      throw error;
    }
  }

  static async findById(idStr) {
    console.log("idStr:", idStr)
    try {
      return await this.instance().usersCollection.findOne({
        _id: new ObjectId(idStr),
      });
    } catch (error) {
      console.error("Error in findById:"+error);
      throw error;
    }
  }

  static async create(user) {
    try {
      const newUser = {
        ...user,
        words: {
          easy: [],
          medium: [],
          hard: [],
        },
        sentences: {
          easy: [],
          medium: [],
          hard: [],
        },
      };
      return await this.instance().usersCollection.insertOne(newUser);
    } catch (error) {
      console.error("Error in create:", error);
      throw error;
    }
  }

  static async addWord(userId, word, difficulty) {
    try {
      const user = await this.instance().usersCollection.findOne({
        _id: new ObjectId(userId),
      });
      const words = user.words;
      words[difficulty].push(word);
      return await this.instance().usersCollection.updateOne(
        { _id: new ObjectId(userId) },
        {
          $set: {
            words: words,
          },
        }
      );
    } catch (error) {
      console.error("Error in addWord:", error);
      throw error;
    }
  }

  static async addSentence(userId, sentence, difficulty) {
    try {
      const user = await this.instance().usersCollection.findOne({
        _id: new ObjectId(userId),
      });
      const sentences = user.sentences;
      sentences[difficulty].push(sentence);
      return await this.instance().usersCollection.updateOne(
        { _id: new ObjectId(userId) },
        {
          $set: {
            sentences: sentences,
          },
        }
      );
    } catch (error) {
      console.error("Error in addSentence:", error);
      throw error;
    }
  }

  static async findByName(name) {
    try {
      return await this.instance().usersCollection.findOne({
        name: name,
      });
    } catch (error) {
      console.error("Error in findByName:", error);
      throw error;
    }
  }

  static async addPoints(userId, points) {
    try {
      const user = await this.instance().usersCollection.findOne({
        _id: new ObjectId(userId),
      });
      const newPoints = user.points + points;
      return await this.instance().usersCollection.updateOne(
        { _id: new ObjectId(userId) },
        {
          $set: {
            points: newPoints,
          },
        }
      );
    } catch (error) {
      console.error("Error in addPoints:", error);
      throw error;
    }
  }

  static async addSuccess(userId) {
    try {
      const user = await this.instance().usersCollection.findOne({
        _id: new ObjectId(userId),
      });
      const newSuccess = user.success + 1;
      return await this.instance().usersCollection.updateOne(
        { _id: new ObjectId(userId) },
        {
          $set: {
            success: newSuccess,
          },
        }
      );
    } catch (error) {
      console.error("Error in addSuccess:", error);
      throw error;
    }
  }

  static async addFailure(userId) {
    try {
      const user = await this.instance().usersCollection.findOne({
        _id: new ObjectId(userId),
      });
      const newFailure = user.failure + 1;
      return await this.instance().usersCollection.updateOne(
        { _id: new ObjectId(userId) },
        {
          $set: {
            failure: newFailure,
          },
        }
      );
    } catch (error) {
      console.error("Error in addFailure:", error);
      throw error;
    }
  }
}

module.exports = UsersCollection;
