const controller = require("../controllers/sentences");
const router = require("express").Router();

router.get("/", controller.listSentences);
router.get("/:id", controller.getSentence);
router.post("/", controller.createSentence);
router.get("/difficulty/:difficulty", controller.getSentenceByDifficulty);
router.get("/words/:id", controller.getWords);

module.exports = router;
