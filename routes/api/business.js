const router = require("express").Router();
const businessController = require("../../controllers/businessController");

router.route("/")
  .get(businessController.findAll)
  .post(businessController.create);

// Match with "/api/books/:id"
router
  .route("/:id")
  .get(businessController.findById)
  .put(businessController.update)
  .delete(businessController.remove);

module.exports = router;