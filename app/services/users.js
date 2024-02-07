const UsersCollection = require("../DAL/users.js");

module.exports = {
  getAllUsers: async () => {
    const allUsers = await UsersCollection.findAll();
    return allUsers.map((u) => ({
      id: u._id,
      name: u.name,
      mail: u.mail,
      age: u.age,
      password: u.password,
      points: u.points,
      words: u.words,
      sentences: u.sentences,
      admin: u.admin,
      success: u.success,
      failure: u.failure,
    }));
  },
  getLeaderBord: async () => {
    return await UsersCollection.getLeaderBord();
  },
  updateLevel: async (userId, level,data,type) => {
    const u = await UsersCollection.updateLevel(userId, level,data,type);
    return u;
  },

  getUser: async (strId) => {
    const user = await UsersCollection.findById(strId);
    const { _id, name, mail, age, password, points, words, sentences,admin,success,failure } = user;
    return {
      _id,
      name,
      mail,
      age,
      password,
      points,
      words,
      sentences,
      admin,
      success,
      failure
    };
  },
  createUser: async (p) => {
    const u = await UsersCollection.create({
      ...p,
      points: 0,
      success: 0,
      failure: 0,
      admin: false,
      createdAt: Date.now(),
    });
    return u;
  },
  addWord: async (userId, word, difficulty) => {
    const u = await UsersCollection.addWord(userId, word, difficulty);
    return u;
  },
  addSentence: async (userId, sentence, difficulty) => {
    const u = await UsersCollection.addSentence(userId, sentence, difficulty);
    return u;
  },
  findByMail: async (mail) => {
    return await UsersCollection.findByMail(mail);
  },
  findByName: async (name) => {
    const user = await UsersCollection.findByName(name);
    const { mail, age, password, points, words, sentences,admin,success,failure } = user;
    return {
      name,
      mail,
      age,
      password,
      points,
      words,
      sentences,
      admin,
      success,
      failure
    };
  },
  addPoints: async (userId, points) => {
    const u = await UsersCollection.addPoints(userId, points);
    return u;
  },

  addSuccess: async (id) => {
    const u = await UsersCollection.addSuccess(id);
    return u;
  },

  addFailure: async (id) => {
    const u = await UsersCollection.addFailure(id);
    return u;
  },
};
