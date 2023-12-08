// routes/userRoutes.js
const express = require('express');
const UserController = require('../controllers/allUserControllers');
const router = express.Router();

router.get("/users2", UserController.getUsers);

module.exports = router;