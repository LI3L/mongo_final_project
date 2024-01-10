const { ObjectId } = require("mongodb");
const MongoDatabase = require("./db");

class UsersCollection {
  constructor() {
    this.usersCollection = MongoDatabase.instance()
      .db()
      .collection("users");
  }

  static instance() {
    if (!this._instance) {
      this._instance = new UsersCollection();
    }
    return this._instance;
  }

  static async findAll() {
    try {
      return await this.instance().usersCollection.find({}).toArray();
    } catch (error) {
      console.error("Error in findAll:", error);
      throw error;
    }
  }

  static async findById(idStr) {
    try {
      return await this.instance().usersCollection.findOne({
        _id: new ObjectId(idStr),
      });
    } catch (error) {
      console.error("Error in findById:", error);
      throw error;
    }
  }

  static async create(user) {
    try {
        const newUser = {
          ...user,
          city: {
            name: user.city.name,
            location: { type: "Point", coordinates: user.city.location },
          },
        };
      return await this.instance().usersCollection.insertOne(newUser);
    } catch (error) {
      console.error("Error in create:", error);
      throw error;
    }
  }
}

module.exports = UsersCollection;
