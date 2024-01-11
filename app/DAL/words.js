const { ObjectId } = require("mongodb");
const MongoDatabase = require("./db");

class ProductsCollection {
    constructor() {
        this.productsCollection = MongoDatabase.instance().db().collection("products");
    }

    static instance() {
        if (!this._instance) {
            this._instance = new ProductsCollection();
        }
        return this._instance;
    }

    static async findAll() {
        try {
            return await this.instance().productsCollection.find({}).toArray();
        } catch (error) {
            console.error("Error in findAll:", error);
            throw error;
        }
    }

    static async findById(idStr) {
        try {
            return await this.instance().productsCollection.findOne({ _id: new ObjectId(idStr) });
        } catch (error) {
            console.error("Error in findById:", error);
            throw error;
        }
    }

    static async create(product) {
        try {
            return await this.instance().productsCollection.insertOne(product);
        } catch (error) {
            console.error("Error in create:", error);
            throw error;
        }
    }
}

module.exports = ProductsCollection;
