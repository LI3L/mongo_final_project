const {
  getAllUsers,
  getUser,
  createUser,
} = require("../services/users");

module.exports = {
  listUsers: async (req, res) => {
    try {
      const users = await getAllUsers();
      res.json(users);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getUser: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await getUser(id);
      res.json(user);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  createUser: async (req, res) => {
    try {
      const { name,mail,age,city } = req.body;
      const newUser = await createUser(name,mail,age,city);
      res.json(newUser);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
