const controller = require("../controllers/users");
const router = require("express").Router();

router.get("/", controller.listUsers);
router.get("/:id", controller.getUser);
router.post("/", controller.createUser);
router.post("/login", controller.getLoginUser);

module.exports = router;
