const controller = require("../controllers/posts");
const router = require("express").Router();

router.get("/", controller.listPosts);
router.get("/:id", controller.getPost);
router.post("/", controller.createPost);

module.exports = router;
