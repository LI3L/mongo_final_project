const {
  getAllUsers,
  getUser,
  createUser,
  addWord,
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
      const { name, mail, age, password, points, words } = req.body;
      const newUser = await createUser(
        name,
        mail,
        age,
        password,
        points,
        words
      );
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
};
