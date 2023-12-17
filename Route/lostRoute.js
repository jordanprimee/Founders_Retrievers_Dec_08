const express = require('express');
const lostController = require('../controllers/lostControllers');
const router = express.Router();

router.get("/lostF", lostController.getLost);

module.exports = router;