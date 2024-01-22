const {
  getAllUsers,
  getUser,
  createUser,
  addWord,
  findByName,
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
      const p = req.body;
      const newUser = await createUser(p);
      res.json(newUser);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  addWord: async (req, res) => {
    try {
      const userId = req.params.id;
      const { word, difficulty } = req.body;
      const user = await addWord(userId, word, difficulty);
      res.json(user);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  findByName: async (req, res) => {
    try {
      const name = req.params.name;
      const user = await findByName(name);
      res.json(user);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
