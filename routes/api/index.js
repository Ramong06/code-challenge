const router = require("express").Router();
const businessRoutes = require("./business");

router.use("/businesses", businessRoutes);

module.exports = router;