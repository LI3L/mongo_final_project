const controller = require("../controllers/wrods");
const router = require("express").Router();
const cacheNoStore = require("../middlewares/cacheNoStore");

router.get("/",controller.listWrods);
router.get("/:id", controller.getWrods);
router.post("/", controller.createWrods);
router.put("/:id",  controller.editWord);
router.get("/byDifficulty/:difficulty", controller.getWrodsByDifficulty);

module.exports = router;
