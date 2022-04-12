const express = require("express");
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(require("helmet")());
// router.use(withApiAuthRequired(async (req, res) => {}))

module.exports = router;
