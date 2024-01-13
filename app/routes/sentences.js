const controller = require("../controllers/sentences");
const router = require("express").Router();

router.get("/", controller.listSentences);
router.get("/:id", controller.getSentence);
router.post("/", controller.createSentence);

module.exports = router;
