const controller = require("../controllers/wrods");
const router = require("express").Router();
const cacheNoStore = require("../middlewares/cacheNoStore");

router.get("/", cacheNoStore, controller.listWrods);
router.get("/:id", cacheNoStore, controller.getWrods);
router.post("/", cacheNoStore, controller.createWrods);
router.put("/:id", cacheNoStore, controller.editWord);
router.get(
  "/byDifficulty/:difficulty",
  cacheNoStore,
  controller.getWrodsByDifficulty
);

module.exports = router;
