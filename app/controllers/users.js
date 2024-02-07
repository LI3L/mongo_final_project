const { MongoClient } = require("mongodb");
const {
  getAllUsers,
  getUser,
  createUser,
  addWord,
  findByName,
  findByMail,
  addPoints,
  addSentence,
  addSuccess,
  addFailure,
  getLeaderBord
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
  getLeaderboard: async (req, res) => {
    try {
      const leaderboard = await getLeaderBord();
      res.json(leaderboard);
    } catch (err) {
      res.status(500).send(err);}
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
  existsUser: async (req, res) => {
    try {
      const { mail } = req.body;
      const user = await findByMail(mail);
      if (user) {
        res.json(true);
      } else {
        // res.status(400).send("Wrong password");
        return res.json(false);
      }
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
    }
  },
  getLoginUser: async (req, res) => {
    try {
      const { mail, password } = req.body;
      const user = await findByMail(mail);
      if (user && user.password === password) {
        res.json(user);
      } else {
        return res.json(null);
      }
    } catch (err) {
      console.log(err);
      res.status(400).send(err);
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
  addPoints: async (req, res) => {
    try {
      const { userId, points } = req.body;
      const user = await addPoints(userId, points);
      res.json(user);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  addSentence: async (req, res) => {
    try {
      const userId = req.params.id;
      const { sentence, difficulty } = req.body;
      const user = await addSentence(userId, sentence, difficulty);
      res.json(user);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  addSuccess: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await addSuccess(id);
      res.json(user);
    } catch (err) {
      res.status;
    }
  },
  addFailure: async (req, res) => {
    try {
      const id = req.params.id;
      const user = await addFailure(id);
      res.json(user);
    } catch (err) {
      res.status;
    }
  },
};
