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
    }));
  },
  getUser: async (strId) => {
    const user = await UsersCollection.findById(strId);
    const { name, mail, age, password, points, words } = user;
    return {
      name,
      mail,
      age,
      password,
      points,
      words,
    };
  },
  createUser: async (p) => {
    const u = await UsersCollection.create({
      ...p,
      points: 0,
      createdAt: Date.now(),
    });
    return u;
  },
  addWord: async (userId, word, difficulty) => {
    const u = await UsersCollection.addWord(userId, word, difficulty);
    return u;
  },
  findByName: async (name) => {
    const user = await UsersCollection.findByName(name);
    const { mail, age, password, points, words } = user;
    return {
      name,
      mail,
      age,
      password,
      points,
      words,
    };
  },
};
