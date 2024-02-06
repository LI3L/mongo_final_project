const controller = require("../controllers/wrods");
const router = require("express").Router();
const cacheNoStore = require("../middlewares/cacheNoStore");

router.get("/", controller.listWrods);
router.get("/:id", controller.getWrods);
router.post("/", controller.createWrods);
router.put("/:id", controller.editWord);
router.get("/byDifficulty/:difficulty", controller.getWrodsByDifficulty);
router.post("/addSuccess/:id", controller.addSuccess);
router.post("/addFailure/:id", controller.addFailure);

module.exports = router;
