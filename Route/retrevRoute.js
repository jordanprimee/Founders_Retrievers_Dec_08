// routes/userRoutes.js
const express = require('express');
const retrevController = require('../controllers/retrevControllers');
const router = express.Router();

router.get("/retrevF", retrevController.getRetrev);

module.exports = router;