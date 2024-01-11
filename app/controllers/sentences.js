const { getAllSentences, getSentences, createSentences } = require("../services/sentences");

module.exports = {
  listSentences: async (req, res) => {
    try {
      const sentences = await getAllSentences();
      res.json(sentences);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getSentence: async (req, res) => {
    try {
      const sentenceId = req.params.userId;
      const sentence = await getPost(sentenceId);
      res.json(sentence);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  createSentence: async (req, res) => {
    try {
      const { userId,title,text,img } = req.body;
      const newPost = await createPost(userId,title,text,img);
      res.json(newPost);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
