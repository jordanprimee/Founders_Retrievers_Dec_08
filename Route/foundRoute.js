// routes/userRoutes.js
const express = require('express');
const foundController = require('../controllers/foundControllers');
const router = express.Router();

router.get("/foundF", foundController.getFound);

module.exports = router;
