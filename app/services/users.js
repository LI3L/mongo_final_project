const UsersCollection = require("../DAL/users.js");

module.exports = {
  getAllUsers: async () => {
    const allUsers = await UsersCollection.findAll();
    return allUsers.map((u) => ({
      id: u._id,
      name: u.name,
      mail: u.mail,
      age: u.age,
      city: u.city,
      coordinates: u.coordinates,
    }));
  },
  getUser: async (strId) => {
    const user = await UsersCollection.findById(strId);
    const { name, mail, age, city, coordinates } = user;
    return {
      name,
      mail,
      age,
      city,
      coordinates,
    };
  },
  createUser: async (name, mail, age, city) => {
    const u = await UsersCollection.create({
      name,
      mail,
      age,
      city,
      createdAt: Date.now(),
    });
    return u;
  },
};
