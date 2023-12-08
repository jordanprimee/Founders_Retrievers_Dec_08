const pool = require('../db');


const userModel = require('../models/allUserModel'); // Adjust the path accordingly

async function getAllUser(req, res) {
  try {
    console.log("Decoded User Object:", req.user);

    // Assuming you have a getUserById function in your userModel
    const users = await userModel.getAllUser(req.user);

    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error in getting the profile');
  }
}

async function getUsers(req, res) {
  try {
    const page = parseInt(req.query.page) - 1 || 0;
    const limit = parseInt(req.query.limit) || 5;
    const search = req.query.search || "";

    const users = await userModel.getUsers({ page, limit, search });
    const total = await userModel.getTotalUsersCount(search);

    const response = {
      error: false,
      total,
      page: page + 1,
      limit,
      users,
    };

    res.status(200).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: true, message: 'Internal Server Error' });
  }
}

module.exports = {
  getUsers,
    getAllUser
  };