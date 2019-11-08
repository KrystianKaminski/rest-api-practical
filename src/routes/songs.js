const router = require("express").Router();
let songsController = require("../controllers/songsController");

router.route("/");
// router.get("/", songsController.findAll);
// router.post("/", songsController.create);
// router.put("/", songsController.update);
// router.delete("/:id", songsController.delete);

module.exports = router;
