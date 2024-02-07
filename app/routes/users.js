const controller = require("../controllers/users");
const router = require("express").Router();

router.get("/", controller.listUsers);
router.get("/:id", controller.getUser);
router.post("/", controller.createUser);
router.post("/login", controller.getLoginUser);
router.post("/exists", controller.existsUser);
router.post("/addPoints", controller.addPoints);
router.post("/addWord/:id", controller.addWord);
router.post("/addSentence/:id", controller.addSentence);
router.post("/addSuccess/:id", controller.addSuccess);
router.post("/addFailure/:id", controller.addFailure);
router.get("/top/users", controller.getLeaderboard);
router.post("/updateLevel", controller.updateLevel);

module.exports = router;
