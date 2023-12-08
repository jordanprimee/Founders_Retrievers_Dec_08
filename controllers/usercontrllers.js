// userController.js
require('dotenv').config();
const jwt = require('jsonwebtoken');
const UserModel = require('../models/usermodels');
const bcrypt = require('bcrypt');

const registerUser = async (req, res) => {
  const { username, email, password, phonenumber, city, country } = req.body;

  try {
    // Check if the username is already taken
    const existingUser = await UserModel.findByEmail(email);

    if (existingUser) {
      return res.status(400).json({ message: 'Email already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user in the database with the hashed password
    const newUser = await UserModel.createUser(username, email, hashedPassword, phonenumber, city, country);

    res.status(200).json({ message: 'User registered successfully', user: newUser });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if the username and password match
    const user = await UserModel.findByEmailAndPassword(email, password);

    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' });
    }

    // Include user information in the token payload
    const payload = {
      id_user: user.id_user,
      email: user.email,
      username: user.username,
    };

    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(payload, secretKey, { expiresIn: '7d' });
    console.log(token)

    res.status(200).json({
      message: 'User signed in successfully',
      token: token,
      id_user: user.id_user,
    });
    console.log(token);
    console.log(user.id_user);
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
module.exports = {
  registerUser,
  loginUser,
};
