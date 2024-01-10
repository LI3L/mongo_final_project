const { getAllPosts, getPost, createPost } = require("../services/posts");

module.exports = {
  listPosts: async (req, res) => {
    try {
      const posts = await getAllPosts();
      res.json(posts);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  getPost: async (req, res) => {
    try {
      const userId = req.params.userId;
      const post = await getPost(userId);
      res.json(post);
    } catch (err) {
      res.status(500).send(err);
    }
  },
  createPost: async (req, res) => {
    try {
      const { userId,title,text,img } = req.body;
      const newPost = await createPost(userId,title,text,img);
      res.json(newPost);
    } catch (err) {
      res.status(500).send(err);
    }
  },
};
