const controller = require("../controllers/users");
const router = require("express").Router();

router.get("/", controller.listUsers);
router.get("/:id", controller.getUser);
router.post("/", controller.createUser);

module.exports = router;
