const PostsCollection = require("../DAL/posts.js");

module.exports = {
  getAllPosts: async () => {
    const allPosts = await PostsCollection.findAll();
    return allPosts.map((p) => ({
      id: p._id,
      userId: p.userId,
      title: p.title,
      text: p.text,
      img: p.img,
    }));
  },
  getPost: async (strId) => {
    const post = await PostsCollection.findById(strId);
    const { userId, title, text, img } = post;
    return {
      userId,
      title,
      text,
      img,
    };
  },
  createPost: async (userId, title, text, img) => {
    const p = await PostsCollection.create({
      userId,
      title,
      text,
      img,
      createdAt: Date.now(),
    });
    return p;
  },
};
